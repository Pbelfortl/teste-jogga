'use client' 
import React from "react";
import { useState } from "react";
import { Lead } from "@/types/types";
import useLeads  from "./hooks/useLeads";

export default function Home () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const {saveLead} = useLeads();


  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    await saveLead({ name, email, telefone: phone } as Lead).catch(error => {
      alert(`${error}`);
      console.error("Error saving lead:", error);
      setLoading(false);
      return;
    }).then(() => {
      setLoading(false);
      //window.location.href = `https://wa.me/5587999363958?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20sua%20aplica%C3%A7%C3%A3o%20de%20capta%C3%A7%C3%A3o%20de%20leads!`
    });
  }


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 center">
      <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="text" name="telefone" placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} />
      <div className="flex gap-4 center">
        <button onClick={() => setLoading(true)} type="submit">Enviar</button>
        {loading && <p>Loading...</p>}
      </div>
    </form>
  );
}