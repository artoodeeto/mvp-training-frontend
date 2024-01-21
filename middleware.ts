import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {

  const hasToken = request.cookies.has('access_token');
  let token = request.cookies.get('access_token')

  // console.log('MID', token, hasToken)

  if (!hasToken && !request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // if (!token) return NextResponse.redirect(new URL('/login', request.url))

  request.cookies.set('foo', 'bar');


  const response = NextResponse.next();


  // response.cookies.set({
  //   name: 'access_token',
  //   value: token.value,
  //   path: '/',
  //   sameSite: 'strict'
  // })

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
