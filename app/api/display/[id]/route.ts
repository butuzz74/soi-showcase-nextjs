import { connectDB } from '../../../../lib/mongodb';
import Display from '../../../../models/display';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();    
    const { id } = await params;    
    const display = await Display.findById(id).select(
      '-__v -createdAt -updated'
    );
    if (!display) {
      return NextResponse.json(
        { message: 'Дисплей не найден' },
        { status: 404 }
      );
    }
    return NextResponse.json(display);
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

    const updatedDisplay = await Display.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return NextResponse.json(updatedDisplay);
  } catch (error) {
    console.error('PATCH error:', error);
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}