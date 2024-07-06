import { NextRequest, NextResponse } from "next/server";

/**
 * rewrite all paths to lower case,
 * because
 * 
 * */
export function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL(request.nextUrl.pathname.toLocaleLowerCase(), request.url));
}