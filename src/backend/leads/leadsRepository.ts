'use server';
import { PrismaClient } from "@prisma/client";
import { Status } from "@prisma/client";

const prisma = new PrismaClient();

export async function createLead(data: { name: string; email: string; telefone: string }) {

    try {
        const lead = await prisma.lead.upsert({
            where: { email: data.email },
            create: data,
            update: data,
        });
        return lead;
    } catch (error) {
        console.error("Error saving lead:", error);
        throw new Error("Could not save lead");
    } finally {
        await prisma.$disconnect();
    }
}

export async function getAllLeads() {
    try {
        const leads = await prisma.lead.findMany();
        return leads;
    } catch (error) {
        console.error("Error fetching leads:", error);
        throw new Error("Could not fetch leads");
    } finally {
        await prisma.$disconnect();
    }
}

export async function getLeadByEmail(email: string) {
    try {
        const lead = await prisma.lead.findUnique({
            where: { email },
        });
        return lead;
    } catch (error) {
        console.error("Error fetching lead by email:", error);
        throw new Error("Could not fetch lead");
    } finally {
        await prisma.$disconnect();
    }
}

export async function changeLeadStatus(id: number, status: Status) {
    try {
        const lead = await prisma.lead.update({
            where: { id: Number(id) },
            data: { status },
        });
        return lead;
    } catch (error) {
        console.error("Error changing lead status:", error);
        throw new Error("Could not change lead status");
    } finally {
        await prisma.$disconnect();
    }
}
