"use server";

import { NextResponse } from "next/server";
import client from "../db";
export async function allapi(){
       try {
        const data = await client.post.findMany({});
        console.log(data);
        return NextResponse.json(data);
       } catch (error) {
         console.log(error);
       }
}