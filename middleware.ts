import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });  
  

  if (!token) {        
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/admin`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add/:path*"],
};

