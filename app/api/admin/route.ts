import { connectDB } from '../../../lib/mongodb';
import Admin from '../../../models/admin';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    await connectDB();
    const admin = await Admin.findOne({ email: email }).select(
      '-__v -createdAt -updated'
    );

    if (!admin) {
      return NextResponse.json(
        { message: `Пользователь с ${email} не найден` },
        { status: 404 }
      );
    }
    return NextResponse.json(admin);
  } catch (error) {
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}
