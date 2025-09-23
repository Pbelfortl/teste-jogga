'use client'
import  useLeads  from "../hooks/useLeads";

export default function View() {

    const { leads } = useLeads();

    return (
        <div>
            <h1>View Leads</h1>
            <ul>
                {leads.map(lead => (
                    <li key={lead.id}>{lead.name} - {lead.email} - {lead.telefone}</li>
                ))}
            </ul>
        </div>
    );
}