'use client' 
import React from "react";
import { useState } from "react";
import { Lead } from "@/types/types";
import { useLeads } from "./hooks/useLeads";

export default function Home () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    await useLeads().saveLead({ name, email, telefone: phone } as Lead);
    window.location.href = `https://wa.me/?text=New Lead: ${name}, ${email}, ${phone}`
  }


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 center">
      <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="text" name="telefone" placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
}