// /app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    const BASE_URL = process.env.AUTH_BASE_URL;

    if (!BASE_URL) {
      console.error("Missing AUTH_BASE_URL");
      return NextResponse.json(
        { success: false, message: "Server misconfiguration" },
        { status: 500 }
      );
    }

    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });

    const { accessToken, refreshToken, profile, role } = response.data.data;

    const res = NextResponse.json(
      {
        success: true,
        message: "Login successful",
        data: { profile, role },
      },
      { status: 200 }
    );

    // ACCESS TOKEN (HttpOnly)
    res.cookies.set("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    // REFRESH TOKEN (HttpOnly)
    res.cookies.set("refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    // USER ROLE COOKIE (Not HttpOnly so middleware + client can read it)
    res.cookies.set("user_role", role, {
      httpOnly: false, // Important: client can read it
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch (error: any) {
    console.error("Login error:", error?.response?.data || error.message);

    return NextResponse.json(
      {
        success: false,
        message:
          error?.response?.data?.message ||
          error.message ||
          "Login failed. Please try again.",
      },
      { status: error?.response?.status || 500 }
    );
  }
}
