import { NextRequest, NextResponse } from 'next/server';
import client from '@/db/index';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;

  if (!id) {
    return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 });
  }

  try {
    const data = await client.customapi.findUnique({
      where: { id: parseInt(id) },
    });

    if (!data) {
      return NextResponse.json({ error: 'Data not found' }, { status: 404 });
    }
     
     const feild = data.fields;
    return NextResponse.json({ feild });

  } catch (error) {
    console.error('Error retrieving data:', error);
    return NextResponse.json({ error: 'Failed to retrieve data' }, { status: 500 });
  } 
}
