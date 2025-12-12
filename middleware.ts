// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("access_token")?.value;
  const role = req.cookies.get("user_role")?.value; // Optional if you store role in cookies
  const { pathname } = req.nextUrl;

  // PUBLIC ROUTES (No authentication required)
  const publicPaths = ["/login", "/signUp", "/forgot-password", "/verify-otp"];

  const isPublicRoute = publicPaths.includes(pathname);

  // If user is authenticated and tries to access a public page, redirect to their dashboard
  if (isPublicRoute) {
    if (accessToken) {
      const redirectTo = getDashboardRedirect(role);
      return NextResponse.redirect(new URL(redirectTo, req.url));
    }
    return NextResponse.next();
  }

  // PROTECTED ROUTES — require authentication
  const isProtectedRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/settings");

  if (isProtectedRoute && !accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If user hits a dashboard root without a role cookie, default to student
  if (pathname === "/dashboard" && accessToken) {
    const redirectTo = getDashboardRedirect(role);
    return NextResponse.redirect(new URL(redirectTo, req.url));
  }

  return NextResponse.next();
}

// Helper: Role-based redirect logic
function getDashboardRedirect(role?: string) {
  switch (role) {
    case "student":
      return "/dashboard/student";
    case "tutor":
      return "/dashboard/tutor";
    case "organization":
      return "/dashboard/organization";
    default:
      return "/dashboard/student"; // Default fallback
  }
}

// Middleware path matcher
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/login",
    "/signUp",
    "/forgot-password",
    "/verify-otp",
  ],
};
