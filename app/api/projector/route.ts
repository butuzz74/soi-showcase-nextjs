import { connectDB } from '../../../lib/mongodb';
import Projector from '../../../models/projector';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('🔄 Обрабатываем GET-запрос...');
    await connectDB();
    console.log('🔄 Ищем все проекторы в БД...');
    const projectors = await Projector.find().select("-__v -createdAt -updatedAt");
    console.log('✅ Данные успешно получены:', projectors);
    return NextResponse.json(projectors);
  } catch (error) {
    console.error('❌ Ошибка в API route /api/projector:', error);
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}
