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
        { message: 'Проектор не найден' },
        { status: 404 }
      );
    }
    return NextResponse.json(display);
  } catch (error) {
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}