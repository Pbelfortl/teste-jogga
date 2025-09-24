# 📋 Lead Capture Application

Aplicação desenvolvida para **captação e gerenciamento de leads**, permitindo o registro, consulta e organização de informações de contatos de forma simples e eficiente.  
O projeto utiliza **Next.js** com **Prisma ORM** para integração com o banco de dados.

---

## 🚀 Tecnologias
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- Banco de dados relacional (ex.: PostgreSQL, MySQL, SQLite)

---

## ⚙️ Configuração do ambiente

Antes de rodar o projeto, é necessário configurar as variáveis de ambiente no arquivo `.env` localizado na raiz do projeto.

Exemplo de configuração:

```env
# URL de conexão com o banco de dados
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"

🛠️ Como rodar o projeto localmente

Clone o repositório e, dentro da pasta do projeto, execute os seguintes comandos:

# Instalar dependências
npm install

# Gerar o cliente do Prisma
npx prisma generate

# Rodar as migrations e configurar o banco
npx prisma migrate dev

Após isso, basta iniciar a aplicação:

npm run dev