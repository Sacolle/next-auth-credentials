export { default } from "next-auth/middleware"

//NOTE: Todas as rotas no array precisam q o usuário esteja autenticado para acessar
export const config = { matcher: ["/empresa"] }

/*
* é possível tb q o usuário tenha uma role específica pra isso
*  ref: https://next-auth.js.org/configuration/nextjs

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token)
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
  }
)

export const config = { matcher: ["/admin"] } 
*/