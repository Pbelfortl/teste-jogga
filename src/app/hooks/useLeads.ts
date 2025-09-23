import Backend from "@/backend";
import { Lead } from "@/types/types";
import { useState, useEffect } from "react";

export function useLeads() {

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
        return await Backend.leads.save(data);
    };

    async function viewLeads () {
        return await Backend.leads.view();
    };

    async function changeLeadStatus (id: string, status: string) {
        return await Backend.leads.change(id, status);
    };

    return { leads, saveLead, viewLeads, changeLeadStatus };
}
