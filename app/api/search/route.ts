import { connectDB } from '../../../lib/mongodb';
import { NextResponse, NextRequest } from 'next/server';
import {
  Screen,
  Display,
  Projector,
  Commutation,
  Bracket,
} from '../../../models/index';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  if (!q) return NextResponse.json({ results: [] });
  const regex = new RegExp(q, 'i');

  try {
    const db = await connectDB();
    const results = await Promise.all([
      Projector.find({
        $or: [{ brand: regex }, { model: regex }, { type: regex }],
      })
        .select('_id model image')
        .lean()
        .then((res) =>
          res.map((doc) => ({ ...doc, collection: 'projectors' }))
        ),

      Screen.find({
        $or: [{ brand: regex }, { model: regex }, { type: regex }],
      })
        .select('_id model image')
        .lean()
        .then((res) => res.map((doc) => ({ ...doc, collection: 'screens' }))),

      Display.find({
        $or: [{ brand: regex }, { model: regex }, { type: regex }],
      })
        .select('_id model image')
        .lean()
        .then((res) => res.map((doc) => ({ ...doc, collection: 'displays' }))),

      Commutation.find({
        $or: [{ brand: regex }, { model: regex }, { type: regex }],
      })
        .select('_id model image')
        .lean()
        .then((res) =>
          res.map((doc) => ({ ...doc, collection: 'commutations' }))
        ),

      Bracket.find({
        $or: [{ brand: regex }, { model: regex }, { type: regex }],
      })
        .select('_id model image')
        .lean()
        .then((res) => res.map((doc) => ({ ...doc, collection: 'brackets' }))),
    ]);

    return NextResponse.json({ results: results.flat() });
  } catch (error) {
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}
