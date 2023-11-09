import { int, mysqlEnum, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
 
export const empresas = mysqlTable('empresas', {
	id: int('id').primaryKey().autoincrement(),
	name:  varchar('name', { length: 256 })
});

export const usuarios = mysqlTable('usuarios', {
	id: int('id').primaryKey().autoincrement(),
	name:  varchar('name', { length: 256 }).notNull(),
	email: varchar('email', { length: 256 }).unique().notNull(),
	senha: varchar('senha', { length: 256 }).notNull(),
	role: mysqlEnum('role', ['gerente', 'funcionario']).notNull(),
	empresaId: int('empresaId').references(() => empresas.id).notNull()
});