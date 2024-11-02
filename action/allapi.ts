"use server"

import client from "../db"
import { Post } from "@prisma/client"

export async function allapi(): Promise<Post[]> {
  try {
    const data = await client.post.findMany()
    return data
  } catch (error) {
    console.error("Error fetching API data:", error)
    return []
  }
}
