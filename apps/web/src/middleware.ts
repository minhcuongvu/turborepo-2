import { NextRequest, NextResponse } from 'next/server';
import { decrypt, encrypt, getSession, updateSession } from './lib/session';

/**
 * rewrite all paths to lower case,
 * because
 *
 * */
export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}