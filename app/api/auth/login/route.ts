// /app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
      { email, password }
    );

    const { accessToken, refreshToken, profile, role } = response.data.data;

    const res = NextResponse.json({
      status: "success",
      message: "Login successful",
      data: { profile, role },
    });

    // Secure cookie settings
    res.cookies.set("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 24 hours
    });

    res.cookies.set("refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return res;
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: error?.response?.data?.message || "Login failed",
      },
      { status: 400 }
    );
  }
}
