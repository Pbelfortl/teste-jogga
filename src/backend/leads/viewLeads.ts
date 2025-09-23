import { getAllLeads } from "./leadsRepository";

export async function viewLeads() {

    try {
        const leads = await getAllLeads();
        return leads;
    } catch (error) {
        console.error("Error fetching leads:", error);
        throw new Error("Could not fetch leads");
    }
}
