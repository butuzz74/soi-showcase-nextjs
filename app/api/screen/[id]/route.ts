import { connectDB } from '../../../../lib/mongodb';
import Screen from '../../../../models/screen';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();    
    const { id } = await params;    
    const screen = await Screen.findById(id).select(
      '-__v -createdAt -updated'
    );
    if (!screen) {
      return NextResponse.json(
        { message: 'Дисплей не найден' },
        { status: 404 }
      );
    }
    return NextResponse.json(screen);
  } catch (error) {
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const body = await req.json();
    await connectDB();
    const updateData = {
      ...body,
      ...(body.access !== undefined && {
        access: body.access === 'true',
      }),
    };

    const updatedScreen = await Screen.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return NextResponse.json(updatedScreen);
  } catch (error) {
    console.error('PATCH error:', error);
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}