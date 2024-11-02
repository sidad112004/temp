import CredentialsProvider from "next-auth/providers/credentials"
import client from "@/db"
import { AuthOptions, Session } from "next-auth"

declare module "next-auth" {
    interface Session {
        id: string
    }
}

export const NEXT_AUTH: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "you@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) {
                    return null
                }

                const { email, password } = credentials

                const user = await client.user.findFirst({
                    where: { email, password }
                })

                if (!user || user.password !== password) {
                    return null
                }

                return {
                    id: user.id.toString(),
                    name: user.name,
                    email: user.email
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: ({ session, token }) => {
            if (session.user) {
                session.id = token.sub || ""
            }
            return session
        }
    }
}
