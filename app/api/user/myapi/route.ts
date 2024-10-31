import client from "@/db/index";
import checklogin from "@/action/checklogin/checklogin";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
export  async function GET(request: Request) {
    const login = await checklogin();

        if(!login){
            redirect('/start')
        }
        
        const authorId = Number(login.id);
        const data = await client.customapi.findMany({
            where:{
                createdById:authorId
            }

        });
        
        return NextResponse.json({data})
}