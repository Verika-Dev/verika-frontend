// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("access_token")?.value;

  const { pathname } = req.nextUrl;

  // Public routes
  const publicPaths = ["/login", "/signUp", "/forgot-password", "verify-otp"];

  if (publicPaths.includes(pathname)) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/dashboard/student", req.url));
    }
    return NextResponse.next();
  }

  // Protected routes
  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Configure paths middleware applies to
export const config = {
  matcher: [
    "/dashboard/:path*", // protected
    "/profile/:path*",
    "/settings/:path*",
    "/login",
    "/signUp",
  ],
};
