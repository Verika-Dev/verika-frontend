// /app/api/auth/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = NextResponse.json({
      success: true,
      message: "Logout successful",
    });

    // Remove access token
    res.cookies.set("access_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires: new Date(0),
    });

    // Remove refresh token
    res.cookies.set("refresh_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires: new Date(0),
    });

    // Remove user role
    res.cookies.set("user_role", "", {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires: new Date(0),
    });

    return res;
  } catch (_err) {
    return NextResponse.json(
      { success: false, message: "Logout failed" },
      { status: 500 }
    );
  }
}
