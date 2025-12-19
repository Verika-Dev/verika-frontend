// app/api/courses/enroll/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = process.env.BACKEND_BASE_URL; // e.g., "http://178.128.64.203:8080/api/v1"

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { courseId, studentId } = body;

    if (!courseId || !studentId) {
      return NextResponse.json(
        { success: false, message: "courseId and studentId are required" },
        { status: 400 }
      );
    }

    if (!BASE_URL) {
      console.error("Missing BACKEND_BASE_URL");
      return NextResponse.json(
        { success: false, message: "Server misconfiguration" },
        { status: 500 }
      );
    }

    // Optional: get access token from request headers
    const accessToken = req.headers.get("authorization")?.split(" ")[1];

    const response = await axios.post(
      `${BASE_URL}/courses/enroll`,
      { courseId, studentId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      }
    );

    return NextResponse.json(
      {
        success: true,
        message: "Enrollment successful",
        data: response.data,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(
      "Course enrollment error:",
      error?.response?.data || error.message
    );
    return NextResponse.json(
      {
        success: false,
        message:
          error?.response?.data?.message ||
          error.message ||
          "Failed to enroll in course",
      },
      { status: error?.response?.status || 500 }
    );
  }
}
