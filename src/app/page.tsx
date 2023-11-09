import Image from "next/image"
import { getServerSession } from 'next-auth'
import { authOptions } from "./api/auth/[...nextauth]/route"

export default async function Home() {
	const user = await getServerSession(authOptions)
	
	return <main className="h-screen flex items-center flex-col">
		<div className="flex-1 flex items-center">
			<h1 className="text-8xl align-middle">Site de Teste</h1>
		</div>

		<h1 className="text-4xl align-middle">{user ? 'Info SSR' : 'Faça login'}</h1>
		{user?.user && 
			Object.entries(user?.user)
				.map(([k, v], i) => <p key={i}>{k}:{v}</p>)
		}
		<Image src='/cb7.jpg' width={500} height={500} alt='yeah'/>
	</main>
}
