import { Status } from "@prisma/client";
import { getAllLeads, getLeadByDate, getLeadByName, getLeadByStatus } from "./leadsRepository";

export async function viewLeads() {

    try {
        const leads = await getAllLeads();
        return leads;
    } catch (error) {
        console.error("Error fetching leads:", error);
        throw new Error("Could not fetch leads");
    }

}

export async function  viewLeadsByStatus(status: Status | "") {

    try {
        if (status == "") {
            return await getAllLeads();
        }
        const leads = await getLeadByStatus(status);
        return leads.filter(lead => lead.status === status);
    } catch (error) {
        console.error("Error fetching leads:", error);
        throw new Error("Could not fetch leads");
    }
}

export async function viewLeadsByDate(date: Date) {

    try {
        const leads = await getLeadByDate(date);
        return leads;
    } catch (error) {
        console.error("Error fetching leads:", error);
        throw new Error("Could not fetch leads");
    }
}

export async function viewLeadsByName(name: string) {

    try {
        const leads = await getLeadByName(name);
        return leads;
    } catch (error) {
        console.error("Error fetching leads:", error);
        throw new Error("Could not fetch leads");
    }
}
