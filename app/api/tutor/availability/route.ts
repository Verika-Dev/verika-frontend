import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Read the access_token cookie
    const token = req.cookies.get("access_token")?.value;

    console.log("Access Token:", token);

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized - no token found" },
        { status: 401 }
      );
    }

    // Forward request to backend with Bearer token
    const apiRes = await fetch(
      "http://178.128.64.203:8080/api/v1/booking/availability",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      }
    );

    // Handle backend errors properly
    const data = await apiRes.json();
    console.log("Availability API Response:", apiRes.status, data);

    if (!apiRes.ok) {
      return NextResponse.json(data, { status: apiRes.status });
    }

    return NextResponse.json(data);
  } catch (err: any) {
    console.error("Availability API Error:", err);
    return NextResponse.json(
      { message: "Server Error", error: err.message },
      { status: 500 }
    );
  }
}
