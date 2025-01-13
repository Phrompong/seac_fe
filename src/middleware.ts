import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ตรวจสอบว่าหาก path เป็น '/' ให้ redirect ไปที่ '/auth'
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // ระบุเฉพาะ path ที่ต้องการใช้ middleware
};
