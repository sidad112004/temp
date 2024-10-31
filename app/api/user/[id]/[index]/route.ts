import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';
import client from "@/db/index";

export async function GET(request: NextRequest, { params }: { params: { id: string; index: string } }) {
  const { id, index } = await  params;

  const tempid=Number(id);

  const tempindex=Number(index);

  if(!tempid || !tempindex){
    return NextResponse.json({error:"not correct url"})
  }

  const data=await client.customapi.findMany({
    where:{
      createdById:tempid
    }
  })

  if(!data){
    return NextResponse.json({})
  }

  if(tempindex>data.length){
    return NextResponse.json({})
  }
  
  // console.log(data[tempindex-1]);
  const res=data[tempindex-1].fields;
   
  return NextResponse.json({res})
}
