import { delay } from '@repo/utils/helper';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// https://nextjs.org/docs/app/api-reference/file-conventions/route

export async function GET(request: NextRequest) {
  const cookieStore = cookies();
  const token = (await cookieStore).get('token');

  // Extract the query from the GET request
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  // Construct the response message
  const responseMessage = query ? `world, ${query}` : `world`;
  const response = JSON.stringify({ hello: responseMessage });

  // Simulate a delay
  await delay(2000);

  return new NextResponse(response, {
    status: 200,
    headers: { 'Set-Cookie': `token=${token?.value}` },
  });
}

export async function POST(request: NextRequest) {
  const cookieStore = cookies();
  const token = (await cookieStore).get('token');

  // Extract the JSON body from the POST request
  const { username } = await request.json();

  // Construct the response message
  const responseMessage = `Hello, ${username}`;
  const response = JSON.stringify({ greeting: responseMessage });

  // Simulate a delay
  await delay(2000);

  return new NextResponse(response, {
    status: 200,
    headers: { 'Set-Cookie': `token=${token?.value}` },
  });
}
