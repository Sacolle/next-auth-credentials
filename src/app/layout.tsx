import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import Navbar from "@/components/Navbar"
import { getServerSession } from 'next-auth/next'
import SessionProvider from '@/components/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Drizzle + Auth.js',
	description: 'Testando as tecs',
}

type Props = { children: React.ReactNode }

export default async function RootLayout({ children }: Props) {
	const session = await getServerSession()
	return (
		<html lang="pt-br">
			<body className={inter.className}>
				<SessionProvider session={session}>
					<Navbar/>
				</SessionProvider>
				{children}
			</body>
		</html>
	)
}
