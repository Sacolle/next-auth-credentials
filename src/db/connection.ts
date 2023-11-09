import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from '@/db/schema'

const connection = await mysql.createConnection({
	host: process.env.DB_URL,
	port: Number(process.env.DB_PORT),
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_SENHA
})
export const db = drizzle(connection, { schema, mode: 'default'})