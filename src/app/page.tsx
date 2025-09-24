'use client'
import React from "react";
import { useState } from "react";
import { Lead } from "@/types/types";
import useLeads from "./hooks/useLeads";
import Pulse from "../../public/Pulse.svg";
import Image from "next/image";

export default function Home() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { saveLead } = useLeads();


  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    await saveLead({ name, email, telefone: phone } as Lead).then((res) => {
      setLoading(false);
      window.open(`https://wa.me/5587999363958?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20`, "_blank");
    }).catch(error => {
      alert(`${error} Em breve entraremos em contato.`);
      setLoading(false);
      return;
    })
  }


  return (
    <div className="flex justify-between items-center h-screen w-2/3 bg-no-repeat p-6 gap-4">
      <h1 className="text-4xl font-bold text-blue-500 font-sans">A melhor solução em captação de leads.<br /><br /> Entre em contato conosco!</h1>
      <div className="bg-white/40 shadow-xl backdrop-blur-sm rounded-xl w-2/3 flex flex-col gap-4 justify-between p-8 items-center">

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center text-black">
          <input className="bg-white p-2 rounded-xl " type="text" name="name" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
          <input className="bg-white p-2 rounded-xl" type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="bg-white p-2 rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" name="telefone" maxLength={11} placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} />
          <div className="flex justify-center gap-4 align-middle">
            <button className="hover:cursor-pointer bg-sky-500/75 rounded-md px-4 py-2 text-white" onClick={() => setLoading(true)} type="submit">{loading ? <Image src={Pulse} alt="Loading..." width={24} height={24} /> : "Enviar"}</button>
            
          </div>
        </form>
      </div>
    </div>


  );
}