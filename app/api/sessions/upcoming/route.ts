import { NextRequest, NextResponse } from "next/server";

// Mock data for testing
const upcomingSessions = [
  {
    id: "session_1",
    title: "Math Tutoring",
    date: "2025-12-15T14:00:00Z",
    status: "booked",
    tutor: { id: "tutor_1", name: "Mr. John Doe" },
  },
  {
    id: "session_2",
    title: "Physics Tutoring",
    date: "2025-12-17T10:00:00Z",
    status: "booked",
    tutor: { id: "tutor_2", name: "Ms. Jane Smith" },
  },
];

export async function GET(req: NextRequest) {
  try {
    // Here you would check authentication, e.g.,
    // const token = req.headers.get('Authorization');
    // Validate token & fetch user-specific sessions

    return NextResponse.json(upcomingSessions);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch upcoming sessions" },
      { status: 500 }
    );
  }
}
