import { connectDB } from '../../../lib/mongodb';
import Bracket from '../../../models/bracket';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const query: any = {};
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') ?? '1');
  const perPage = parseInt(searchParams.get('perPage') ?? '6');
  const brandParams = searchParams.get('brand');
  const typeParams = searchParams.get('type');
  const accessParams = searchParams.get('access');
  const priceFromParams = parseInt(searchParams.get('priceFrom') ?? '0');
  const priceToParams = parseInt(searchParams.get('priceTo') ?? '0');
  const skip = (page - 1) * perPage;

  if (brandParams) {
    const brands = brandParams.split(',');
    query.brand = { $in: brands };
  }
  if (typeParams) {
    const types = typeParams.split(',');
    query.type = { $in: types };
  }
  if (accessParams) {
    query.access = true;
  }
  if (priceFromParams > 0) {
    query.price = { ...(query.price || {}), $gte: priceFromParams };
  }
  if (priceToParams > 0) {
    query.price = { ...(query.price || {}), $lte: priceToParams };
  }

  try {
    await connectDB();
    const brackets = await Bracket.find(query)
      .select('-__v -createdAt -updated')
      .skip(skip)
      .limit(perPage);

    const totalBrackets = await Bracket.countDocuments(query);

    if (brackets.length === 0) {
      return NextResponse.json({
        displays: [],
        totalPages: 0,
        currentPage: page,
        totalDisplays: 0,
      });
    }

    return NextResponse.json({
      projectors: brackets,
      totalPages: Math.ceil(totalBrackets / perPage),
      currentPage: page,
      totalProjectors: totalBrackets,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (body) {
      if (body.access) {
        const accessBoolean = body.access === 'true';
        await connectDB();
        const newScreen = await Bracket.create({
          ...body,
          access: accessBoolean,
        });
        return NextResponse.json(newScreen);
      }
      await connectDB();
      const newProjector = await Bracket.create({ ...body });
      return NextResponse.json(newProjector);
    }
  } catch (error) {
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}
