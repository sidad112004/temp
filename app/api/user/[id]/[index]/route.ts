import { error } from 'console'
import { NextRequest, NextResponse } from 'next/server'
import client from "@/db/index"

export async function GET(request: NextRequest, { params }: { params: { id: string; index: string } }) {
  try {
    const { id, index } = params
  
    const tempid = Number(id)
  
    const tempindex = Number(index)
  
    if (!tempid || !tempindex) {
      return NextResponse.json({ error: "not correct url" })
    }
  
    const data = await client.customapi.findMany({
      where: {
        id: tempindex
      }
    })
  
    if (!data) {
      return NextResponse.json({})
    }
  
    const respoance = data[0].fields
    
    return NextResponse.json({ respoance })
  } catch (err) {
    console.log(err)
    return NextResponse.json({})
  }
}
