import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { protectedPaths as routes } from '@/constant/route';

export function middleware(request: { nextUrl: { pathname: string }; url: string }) {
  const cookieStore = cookies();
  const isAuth = cookieStore.get('token');

  // Extract the pathname from the request URL
  const { pathname } = request.nextUrl;

  // Check if the pathname matches protected paths
  const isProtected = routes.some((route) => {
    const pathRegex = new RegExp(`^${route.replace(/:\w+/g, '[^/]+')}$`);
    return pathRegex.test(pathname);
  });

  if (!isAuth && isProtected) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: ['/home', '/user/:path*'],
// };
