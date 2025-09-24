'use client'
import Backend from "@/backend";
import { Lead } from "@/types/types";
import { Status } from "@prisma/client";
import { useState, useEffect } from "react";

export default function useLeads() {

    const [leads, setLeads] = useState<Lead[]>([]);

    useEffect(() => {
        const fetchLeads = async () => {
            const fetchedLeads = await Backend.leads.view();
            setLeads(fetchedLeads);
        };

        fetchLeads();
    }, []);

    async function saveLead (data: Lead) {
        if (!data.name || !data.email || !data.telefone) {
            return { error: "All fields are required." };
        }
        try {
            const response = await Backend.leads.save(data);
            return response;
        } catch (error) {
            throw error;
        }
  
    };

    async function viewLeads () {
        return await Backend.leads.view();
    };

    async function changeLeadStatus (id: number, status: string) {
        return await Backend.leads.change(id, status);
    };

    async function refreshLeads() {
        const fetchedLeads = await Backend.leads.view();
        setLeads(fetchedLeads);
    }

    async function filterLeadsByStatus(status: Status) {
        const filteredLeads = await Backend.leads.viewByStatus(status);
        setLeads(filteredLeads);
    }

    async function filterLeadsByDate(date: Date) {
        const filteredLeads = await Backend.leads.viewByDate(date);
        setLeads(filteredLeads);
    }

    async function filterLeadsByName(name: string) {
        const filteredLeads = await Backend.leads.viewByName(name);
        setLeads(filteredLeads);
    }

    return { leads, saveLead, viewLeads, changeLeadStatus, refreshLeads, filterLeadsByStatus, filterLeadsByDate, filterLeadsByName };
}
