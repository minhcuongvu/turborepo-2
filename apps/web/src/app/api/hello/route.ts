import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
 
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// https://nextjs.org/docs/app/api-reference/file-conventions/route

export async function GET(request: NextRequest) {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
 
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')

  const responseMessage = query ? `world, ${query}` : `world`
  return new Response(responseMessage, {
    status: 200,
    headers: { 'Set-Cookie': `token=${token?.value}` },
  })
}