import { connectDB } from '../../../../../lib/mongodb';
import Display from '../../../../../models/display';
import BrandInfo from '../../../../../models/brandInfo';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const query: any = {
    brand: { $regex: `^${slug}$`, $options: 'i' },
  };
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') ?? '1');
  const perPage = parseInt(searchParams.get('perPage') ?? '6');
  const typeParams = searchParams.get('type');
  const accessParams = searchParams.get('access');
  const priceFromParams = parseInt(searchParams.get('priceFrom') ?? '0');
  const priceToParams = parseInt(searchParams.get('priceTo') ?? '0');
  const skip = (page - 1) * perPage;

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
    const projectors = await Display.find(query)
      .select('-__v -createdAt -updated')
      .skip(skip)
      .limit(perPage);

    const totalProjectors = await Display.countDocuments(query);
    const brandInfo = await BrandInfo.find({
      brand: { $regex: `^${slug}$`, $options: 'i' },
    }).select('-__v -createdAt -updated');    

    if (projectors.length === 0) {
      return NextResponse.json({
        projectors: [],
        totalPages: 0,
        currentPage: page,
        totalProjectors: 0,
      });
    }

    return NextResponse.json({
      projectors,
      totalPages: Math.ceil(totalProjectors / perPage),
      currentPage: page,
      totalProjectors,
      brandInfo,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}