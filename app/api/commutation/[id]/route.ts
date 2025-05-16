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

