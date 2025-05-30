import { connectDB } from '../../../../lib/mongodb';
import Projector from '../../../../models/projector';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const projector = await Projector.findById(id).select(
      '-__v -createdAt -updated'
    );
    if (!projector) {
      return NextResponse.json(
        { message: 'Проектор не найден' },
        { status: 404 }
      );
    }
    return NextResponse.json(projector);
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

    const updatedProjector = await Projector.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return NextResponse.json(updatedProjector);
  } catch (error) {
    console.error('PATCH error:', error);
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}
