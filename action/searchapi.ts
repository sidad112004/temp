"use server";

import client from "../db";

export async function searchapi(searchTerm: string) {
    try {
        const data = await client.post.findMany({
            where: {
                title: searchTerm
            }
        });
        return data;
    } catch (error) {
        console.error("Error fetching API data:", error);
        return [];
    }
}