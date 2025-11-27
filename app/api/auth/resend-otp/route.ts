import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/resend-otp`,
      { email, password }
    );

    return NextResponse.json({
      status: "success",
      message: response.data?.message || "OTP resent successfully",
      data: response.data?.data,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: error?.response?.data?.message || "Failed to resend OTP",
      },
      { status: 400 }
    );
  }
}
