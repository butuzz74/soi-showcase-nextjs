import { connectDB } from '../../../lib/mongodb';
import Screen from '../../../models/screen';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const query: any = {};
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') ?? '1');
  const perPage = parseInt(searchParams.get('perPage') ?? '6');
  const brandParams = searchParams.get('brand');
  const typeParams = searchParams.get('type');
  const accessParams = searchParams.get("access");
  const priceFromParams = parseInt(searchParams.get("priceFrom") ?? "0")
  const priceToParams = parseInt(searchParams.get("priceTo") ?? "0")
  const sortParam = searchParams.get("sort");
  const skip = (page - 1) * perPage;

  if (brandParams) {
    const brands = brandParams.split(',');
    query.brand = { $in: brands };
  }
  if (typeParams) {
    const types = typeParams.split(',');
    query.type = { $in: types };
  }
  if (accessParams){
    query.access = true
  }
  if (priceFromParams > 0) {
    query.price = { ...(query.price || {}), $gte: priceFromParams };
  }
  if (priceToParams > 0) {
    query.price = { ...(query.price || {}), $lte: priceToParams };
  }

  let sort: any = {};
  if (sortParam === 'price-asc') {
    sort.price = 1; 
  } else if (sortParam === 'price-desc') {
    sort.price = -1; 
  }

  try {
    await connectDB();
    const screens = await Screen.find(query)
      .select('-__v -createdAt -updated')
      .sort(sort)
      .skip(skip)
      .limit(perPage);

    const totalScreens = await Screen.countDocuments(query);

    if (screens.length === 0) {
      return NextResponse.json({
        products: [],
        totalPages: 0,
        currentPage: page,
        totalProducts: 0,
      });
    }

    return NextResponse.json({
      products: screens,
      totalPages: Math.ceil(totalScreens / perPage),
      currentPage: page,
      totalProducts: totalScreens,
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
        const newScreen = await Screen.create({
          ...body,
          access: accessBoolean,
        });
        return NextResponse.json(newScreen);
      }
      await connectDB();
      const newScreen = await Screen.create({ ...body });
      return NextResponse.json(newScreen);
    }
  } catch (error) {
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}