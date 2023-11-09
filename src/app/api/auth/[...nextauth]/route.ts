import NextAuth from "next-auth"
import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from 'bcrypt'
import { db } from '@/db/connection'

export const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" }
			},
			async authorize (credentials, req) {
				if (credentials) {
					const user = await db.query.usuarios.findFirst(
						{ where: (u, { eq }) => eq(u.email, credentials.email) }
					)
					if(!user) return null
					
					const match = await compare(credentials.password, user.senha)
					if(match){
						return {
							id: `${user.id}`, 
							name: user.name, 
							email: user.email, 
							role: user.role
						}
					}else{
						return null
					}
				} else {
					return null
				}
			},
		})
	],
	callbacks: {
		async jwt({token, user, account, profile, trigger, session}) {
			if(user && trigger === 'signIn'){
				token.user = user
			}
			return token
		},
		async session({session, token}){
			session.user = token.user as any
			return session
		},
	},
	session: { strategy: "jwt" }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }