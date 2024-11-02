import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "@/action/auth"
import { Session } from "next-auth" 

export default async function checklogin(): Promise<Session | null> {
    const session = await getServerSession(NEXT_AUTH)

    if (!session) {
        return null
    }
    
    return session
}
