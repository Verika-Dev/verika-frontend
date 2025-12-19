// app/api/courses/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = process.env.BACKEND_BASE_URL; // e.g., "http://178.128.64.203:8080/api/v1"

export async function GET(req: Request) {
  try {
    if (!BASE_URL) {
      console.error("Missing BACKEND_BASE_URL");
      return NextResponse.json(
        { success: false, message: "Server misconfiguration" },
        { status: 500 }
      );
    }

    // Optional: get access token from request headers
    const accessToken = req.headers.get("authorization")?.split(" ")[1];

    const response = await axios.get(`${BASE_URL}/courses`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Courses fetched successfully",
        data: response.data,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "Fetch courses error:",
      error?.response?.data || error.message
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error?.response?.data?.message ||
          error.message ||
          "Failed to fetch courses",
      },
      { status: error?.response?.status || 500 }
    );
  }
}
