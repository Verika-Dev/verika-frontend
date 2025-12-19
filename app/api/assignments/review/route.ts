// app/api/assignments/review/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = process.env.BACKEND_BASE_URL; // e.g., "http://178.128.64.203:8080/api/v1"

export async function POST(req: Request) {
  try {
    const { assignmentId, reviewerId, rating, comment } = await req.json();

    if (!assignmentId || !reviewerId || !rating) {
      return NextResponse.json(
        {
          success: false,
          message: "assignmentId, reviewerId, and rating are required",
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

    // Retrieve access token from cookies (optional)
    const accessToken = req.headers.get("authorization")?.split(" ")[1];

    const response = await axios.post(
      `${BASE_URL}/assignments/review`,
      { assignmentId, reviewerId, rating, comment },
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
        message: "Review submitted successfully",
        data: response.data,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(
      "Submit review error:",
      error?.response?.data || error.message
    );
    return NextResponse.json(
      {
        success: false,
        message:
          error?.response?.data?.message ||
          error.message ||
          "Failed to submit review",
      },
      { status: error?.response?.status || 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const assignmentId = searchParams.get("assignmentId");

    if (!assignmentId) {
      return NextResponse.json(
        { success: false, message: "assignmentId is required" },
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

    const accessToken = req.headers.get("authorization")?.split(" ")[1];

    const response = await axios.get(`${BASE_URL}/assignments/review`, {
      params: { assignmentId },
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    });

    return NextResponse.json(
      { success: true, data: response.data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "Fetch reviews error:",
      error?.response?.data || error.message
    );
    return NextResponse.json(
      {
        success: false,
        message:
          error?.response?.data?.message ||
          error.message ||
          "Failed to fetch reviews",
      },
      { status: error?.response?.status || 500 }
    );
  }
}
