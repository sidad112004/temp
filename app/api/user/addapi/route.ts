import { NextResponse } from "next/server";
import client from "@/db/index";
import checklogin from "@/action/checklogin/checklogin";

export async function POST(req: Request) {
    try {
        const login:any=await checklogin();
        const authorId=login.id.tonumber();
        const body = await req.json();
        const { apiName, description, link } = body;

        if (!apiName || !description || !link ) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }
        console.log(apiName, description, link, authorId);
        
        await client.post.create({
            data: {
                apiName,
                description,
                link,
                authorId:authorId, 
            },
        });

        return NextResponse.json({ message: "API information saved successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error handling POST request:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
