'use client'
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Navbar() {
	const { data: session } = useSession()

	return (
		<div className="flex pt-2 mx-2 border-b-2">
			<Link href={'/'} 
				className="ml-2 p-1 text-3xl"
			>
				Quem é Vladmir Putin
			</Link>
			{/* Para os links nos seus cantos e não poderem ser clicados no meio */}
			<div className="flex-1 text-center">Dados Client-Side na NavBar</div>
			{session ? 
				<div className="flex flex-col items center">
					{session.user?.name} ({session.user?.role})
					<button onClick={() => signOut()} className="border rounded">Sair</button>
				</div> :
				<Link href={'/api/auth/signin'} 
					className="mr-2 mb-2 p-1 border rounded bg-sky-600 text-2xl font-bold "
				>
					Login
				</Link>
			}		
		</div>
	)
}