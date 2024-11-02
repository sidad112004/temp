"use server"

import client from "../db"
import { Post } from "@prisma/client"

export async function searchapi(searchTerm: string): Promise<Post[]> {
    try {
        const data = searchTerm === '' 
            ? await client.post.findMany() 
            : await client.post.findMany({
                  where: {
                      apiName: searchTerm
                  }
              })

        return data
    } catch (error) {
        console.error("Error fetching API data:", error)
        return []
    }
}
