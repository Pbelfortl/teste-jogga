import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed your database with initial data
  await prisma.lead.create({
    data: {
      name: "Lead Teste",
      email: "lead.teste@example.com",
      telefone: "123456789"
    }
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });


const data = {
    name: "Lead Teste",
    email: "lead.teste@example.com",
    telefone: "123456789"
}