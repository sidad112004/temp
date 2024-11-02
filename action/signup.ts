"use server"

import client from "../db"
import { User } from "@prisma/client"

export async function signup(name: string, email: string, password: string): Promise<User | null> {
    try {
        const user = await client.user.findUnique({
            where: { email }
        })

        if (user) {
            return null
        }

        const newUser = await client.user.create({
            data: {
                name,
                email,
                password
            }
        })

        return newUser
    } catch (error) {
        console.error("Error in signup:", error)
        return null
    }
}
