import { connectDB } from '../../../../lib/mongodb';
import Commutation from '../../../../models/commutation';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();    
    const { id } = await params;    
    const commutation = await Commutation.findById(id).select(
      '-__v -createdAt -updated'
    );
    if (!commutation) {
      return NextResponse.json(
        { message: 'Оборудование не найдено' },
        { status: 404 }
      );
    }
    return NextResponse.json(commutation);
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

    const updatedCommutation = await Commutation.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return NextResponse.json(updatedCommutation);
  } catch (error) {
    console.error('PATCH error:', error);
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}
