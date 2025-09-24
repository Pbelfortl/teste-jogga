'use client'
import Image from "next/image";
import Pulse from "../../../public/Pulse.svg";
import useLeads from "../hooks/useLeads";
import { useState } from "react";
import { Status } from "@prisma/client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";

export default function View() {

    const { leads, changeLeadStatus, filterLeadsByDate, filterLeadsByStatus, filterLeadsByName } = useLeads();
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const router = useRouter();

    return (
        <>
            <div className="fixed top-4 right-4 hover:cursor-pointer">
                <button className="bg-blue-500 text-white p-2 rounded" onClick={() => router.push("/")}>
                    Adicionar Lead
                </button>
            </div>
            <div className="p-4 rounded-xl bg-linear-to-t bg-black/30 shadow-xl backdrop-blur-sm w-4/5 flex flex-col gap-4 justify-center">
                <div className="p-4 flex justify-between rounded-md bg-black/40 pb-2">
                    <input className="p-1 rounded-md border-1 border-black" placeholder="Buscar..." onChange={(e) => filterLeadsByName(e.target.value)}></input>
                    <div className="rounded-md p-1 border-1 border-black flex justify-center align-middle hover:cursor-pointer">
                        <DatePicker selected={selectedDate} onChange={(date) => {
                            setSelectedDate(date);
                            filterLeadsByDate(date as Date);
                        }} />
                    </div>
                    <select className="rounded-md p-1 border-1 border-black" onChange={(e) => filterLeadsByStatus(e.target.value as Status)} defaultValue="">
                        <option className="text-black" value="">Todos</option>
                        <option className="text-black" value="NEW">Novos</option>
                        <option className="text-black" value="IN_CONTACT">Em contato</option>
                        <option className="text-black" value="WON">Convertidos</option>
                    </select>
                </div>
                <h1 className="text-black"><b>Leads captados:</b> {leads.length}</h1>
                <ul className="flex flex-col justify-center align-center gap-6 w-full">
                    {leads.length > 0 ? (leads.map(lead => (
                        <li className="rounded-md p-2 flex justify-between bg-black/40" key={lead.id}>
                            <b>Nome:</b> <p className="truncate">{lead.name}</p> |
                            <b>Email:</b> <p >{lead.email}</p> |
                            <b>Telefone:</b> <p className="hover:cursor-pointer" onClick={() => window.open(`https://wa.me/${lead.telefone}`, "_blank")} >{lead.telefone}</p> |
                            <b>Data:</b> <p className="truncate">{(lead.createdAt).toLocaleDateString()}</p> |
                            <b>Status:</b> <select className="rounded-sm" onChange={(e) => {
                                changeLeadStatus(Number(lead.id), e.target.value)

                            }} defaultValue={lead.status}>
                                <option value={"NEW"}>Novo</option>
                                <option value={"IN_CONTACT"}>Em contato</option>
                                <option value={"WON"}>Convertido</option>
                            </select>
                        </li>
                    ))) : (
                        <Image src={Pulse} alt="Loading..." width={24} height={24} />
                    )}
                </ul>
            </div>

        </>
    );
}