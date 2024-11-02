import { NEXT_AUTH } from "@/action/auth"
import NextAuth from "next-auth"
import { NextApiHandler } from "next"

const handler: NextApiHandler = NextAuth(NEXT_AUTH)

export { handler as GET, handler as POST }
