import { connectDB } from '../../../../lib/mongodb';
import Bracket from '../../../../models/bracket';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();    
    const { id } = await params;    
    const bracket = await Bracket.findById(id).select(
      '-__v -createdAt -updated'
    );
    if (!bracket) {
      return NextResponse.json(
        { message: 'Кронштейн не найден' },
        { status: 404 }
      );
    }
    return NextResponse.json(bracket);
  } catch (error) {
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const body = await req.json();
    await connectDB();
    const updateData = {
      ...body,
      ...(body.access !== undefined && {
        access: body.access === 'true',
      }),
    };

    const updatedBracket = await Bracket.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return NextResponse.json(updatedBracket);
  } catch (error) {
    console.error('PATCH error:', error);
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}
