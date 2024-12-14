import { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config(); // Carrega variáveis de ambiente do .env

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "minha_api",
    port: Number(process.env.DB_PORT) || 5432,
  },
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};

export default config;
