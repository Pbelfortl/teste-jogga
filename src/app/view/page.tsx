'use client'
import Image from "next/image";
import Pulse from "../../../public/Pulse.svg";
import  useLeads  from "../hooks/useLeads";
import { useState } from "react";
import { Status } from "@prisma/client";

export default function View() {

    const [statusFilter, setStatusFilter] = useState("");
    const [dateFilter, setDateFilter] = useState("");
    const [searchFilter, setSearchFilter] = useState("");
    const [filter, setFilter] = useState("");

    const { leads, changeLeadStatus, filterLeadsByDate, filterLeadsByStatus, filterLeadsByName } = useLeads();
    console.log(leads);

    if (statusFilter) {
        leads.filter(lead => lead.status === statusFilter);
    }

/*     function applyFilters() {
        let filteredLeads = leads;
        if (statusFilter) {
            filteredLeads = filteredLeads.filter(lead => lead.status === statusFilter);
        }
        if (dateFilter) {
            filteredLeads = filteredLeads.filter(lead => {
                const leadDate = new Date(lead.createdAt);
                const filterDate = new Date(dateFilter);
                return leadDate.toDateString() === filterDate.toDateString();
            });
        }
        if (searchFilter) {
            filteredLeads = filteredLeads.filter(lead =>
                lead.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
                lead.email.toLowerCase().includes(searchFilter.toLowerCase()) ||
                lead.telefone.toLowerCase().includes(searchFilter.toLowerCase())
            );
        }
        return filteredLeads;
    } */

    return (
        <div className="w-2/3 flex flex-col gap-4 center">
            {leads.length === 0 && <Image src={Pulse} alt="Loading" width={100} height={100} />}
            <div className="w-full flex justify-between">
                <input onChange={(e) => filterLeadsByName(e.target.value)}></input>
                <select onChange={(e) => filterLeadsByStatus(e.target.value as Status)}>
                    <option value="">Todos</option>
                    <option value="NEW">Novos</option>
                    <option value="IN_CONTACT">Em contato</option>
                    <option value="WON">Convertidos</option>
                </select>
                <input type="date" onChange={(e) => filterLeadsByDate(e.target.value)}></input>
            </div>
            <ul className="gap-6 w-full">
                {leads.map(lead => (
                    <li className=" flex justify-between" key={lead.id}>
                        Nome: {lead.name} | 
                        Email: {lead.email} | 
                        Telefone: {lead.telefone} |
                        Data: {(lead.createdAt).toDateString()}|
                        Status: <select onChange={(e) => (changeLeadStatus(Number(lead.id), e.target.value)
                        )} value={lead.status}>
                            <option value={"NEW"}>Novo</option>
                            <option value={"IN_CONTACT"}>Em contato</option>
                            <option value={"WON"}>Convertido</option>
                            </select>
                    </li>
                ))}
            </ul>
        </div>
    );
}