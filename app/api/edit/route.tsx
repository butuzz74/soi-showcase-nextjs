import { connectDB } from '../../../lib/mongodb';
import { NextResponse, NextRequest } from 'next/server';
import {
  Screen,
  Display,
  Projector,
  Commutation,
  Bracket,
  Set
} from '../../../models/index';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const currentProduct = searchParams.get('currentProduct');
  const id = searchParams.get("id")
  if (!currentProduct || !id) return NextResponse.json({ results: [] });

  try {
    const db = await connectDB();
    if(currentProduct === "projector"){
        const product = await Projector.findById(id).select(
      '-__v -createdAt -updatedAt'
    );
    if (!product) {
      return NextResponse.json(
        { message: 'Товар не найден' },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
    }
    if(currentProduct === "screen"){
        const product = await Screen.findById(id).select(
      '-__v -createdAt -updated'
    );
    if (!product) {
      return NextResponse.json(
        { message: 'Товар не найден' },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
    }
    if(currentProduct === "display"){
        const product = await Display.findById(id).select(
      '-__v -createdAt -updated'
    );
    if (!product) {
      return NextResponse.json(
        { message: 'Товар не найден' },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
    }
    if(currentProduct === "bracket"){
        const product = await Bracket.findById(id).select(
      '-__v -createdAt -updated'
    );
    if (!product) {
      return NextResponse.json(
        { message: 'Товар не найден' },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
    }
    if(currentProduct === "commutation"){
        const product = await Commutation.findById(id).select(
      '-__v -createdAt -updated'
    );
    if (!product) {
      return NextResponse.json(
        { message: 'Товар не найден' },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
    }
    if(currentProduct === "set"){
        const product = await Set.findById(id).select(
      '-__v -createdAt -updated'
    );
    if (!product) {
      return NextResponse.json(
        { message: 'Товар не найден' },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
    }

  } catch (error) {
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}

