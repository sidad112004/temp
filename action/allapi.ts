
"use server";

import client from "../db";

export async function allapi() {
  try {
    const data = await client.post.findMany({});
    console.log(data);
    return data; 
  } catch (error) {
    console.error("Error fetching API data:", error);
    return []; 
  }
}
