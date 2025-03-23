import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('Request authToken:', request.headers.get('authToken'));
}
 
export const config = {
  matcher: ["/((?!sign-in|api|public).*)"],
}
