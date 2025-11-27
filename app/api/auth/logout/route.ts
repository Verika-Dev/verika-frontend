import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = NextResponse.json({
      status: "success",
      message: "Logout successful",
    });

    // Clear access token
    res.cookies.set("access_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires: new Date(0), 
    });

    // Clear refresh token
    res.cookies.set("refresh_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires: new Date(0),
    });

    return res;
  } catch (_err) {
    return NextResponse.json(
      {
        status: "error",
        message: "Logout failed",
      },
      { status: 500 }
    );
  }
}
