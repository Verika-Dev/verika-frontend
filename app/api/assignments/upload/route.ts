// app/api/assignments/upload/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = process.env.BACKEND_BASE_URL; // e.g., "http://178.128.64.203:8080/api/v1"

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const assignmentId = formData.get("assignmentId")?.toString();
    const studentId = formData.get("studentId")?.toString();
    const file = formData.get("file") as File | null;

    if (!assignmentId || !studentId || !file) {
      return NextResponse.json(
        {
          success: false,
          message: "assignmentId, studentId, and file are required",
        },
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

    // Prepare multipart/form-data for backend
    const backendForm = new FormData();
    backendForm.append("assignmentId", assignmentId);
    backendForm.append("studentId", studentId);
    backendForm.append("file", file);

    // Optional: include Authorization from request headers
    const accessToken = req.headers.get("authorization")?.split(" ")[1];

    const response = await axios.post(
      `${BASE_URL}/assignments/upload`,
      backendForm,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      }
    );

    return NextResponse.json(
      {
        success: true,
        message: "Assignment uploaded successfully",
        data: response.data,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(
      "Assignment upload error:",
      error?.response?.data || error.message
    );
    return NextResponse.json(
      {
        success: false,
        message:
          error?.response?.data?.message ||
          error.message ||
          "Failed to upload assignment",
      },
      { status: error?.response?.status || 500 }
    );
  }
}
