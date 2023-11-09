import NextAuth, { DefaultSession } from "next-auth"

/* 
* NOTE: Dentro deste arquivo se define o tipo de retorno da função Client-Side
*       getSession. No caso atual define-se que a interface session contém um atributo user
*       que pode ter o atributo role e os atributos de DefaultSession["user"]
*  ref: https://next-auth.js.org/getting-started/typescript
*/
declare module "next-auth" {
	interface Session {
		user: {
			role?: string | undefined | null
		} & DefaultSession["user"]
	}
}