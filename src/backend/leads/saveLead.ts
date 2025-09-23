import { getLeadByEmail, createLead } from "./leadsRepository";

export async function saveLead(data: { name: string; email: string; telefone: string }) {

    const checkExisting = await getLeadByEmail(data.email);

    if (checkExisting && (Date.now() - checkExisting.createdAt.getTime()) < 3600000) {
        return { error: "Lead adquirido recentemente." };
    }

    const lead = await createLead(data);

    return lead;
}
