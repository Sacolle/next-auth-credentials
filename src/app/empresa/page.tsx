import { db } from '@/db/connection'

export default async function Empresa() {
	const entries = await db.query.empresas.findMany()

	return <main className="h-screen flex items-center flex-col">
		{entries.map(e => <div key={e.id}>{e.name}</div>)}
	</main>
}