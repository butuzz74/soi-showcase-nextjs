import { connectDB } from '../../../../lib/mongodb';
import Set from '../../../../models/set';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();    
    const { id } = await params;    
    const set = await Set.findById(id).select(
      '-__v -createdAt -updated'
    );
    if (!set) {
      return NextResponse.json(
        { message: 'Комплект не найден' },
        { status: 404 }
      );
    }
    return NextResponse.json(set);
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

    const updatedSet = await Set.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return NextResponse.json(updatedSet);
  } catch (error) {
    console.error('PATCH error:', error);
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}