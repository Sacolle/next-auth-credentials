import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
	schema: "./src/db/schema.ts",
	out: "./drizzle",
	driver: 'mysql2',
	dbCredentials: {
		host: process.env.DB_URL ?? "localhost",
		port: Number(process.env.DB_PORT),
		database: process.env.DB_NAME ?? "",
		user: process.env.DB_USER,
		password: process.env.DB_SENHA
	}
} satisfies Config;