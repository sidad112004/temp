import { NextRequest, NextResponse } from "next/server";
import checklogin from '@/action/checklogin/checklogin';
import { redirect } from 'next/navigation';
import client from '@/db/index';
export async function POST(req:NextRequest){
    const login = await checklogin();

    if(!login){
        redirect('/start')
    }
    
    const createdById = Number(login.id);

   try {
     const { title,json } = await req.json();
     const newdata=client.customapi.create({
        data: {
            title: title,
            fields: json,  
            sampleSize: 25,
            createdById,
          },
     })
     return NextResponse.json({ success: true, data: newdata });
    } catch (error) {
      console.log(error);
      console.log("error in upload jsonfile folder")
   }
}