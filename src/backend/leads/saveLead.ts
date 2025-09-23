import { getLeadByEmail, createLead } from "./leadsRepository";

export async function saveLead(data: { name: string; email: string; telefone: string }) {

    const checkExisting = await getLeadByEmail(data.email);

    try {

        if (checkExisting && (Date.now() - checkExisting.createdAt.getTime()) < 3600000) {

            return alert("Lead adquirido recentemente.");
        }
    } catch (error) {
        console.error("Error checking existing lead:", error);
        throw error;
    }

    const lead = await createLead(data);

    return lead;
}
