import { NextRequest, NextResponse } from "next/server";

// Mock data for testing
const recentActivities = [
  {
    id: "activity_1",
    title: "Submitted Assignment: Math",
    type: "Submission",
    date: "2025-12-12T10:00:00Z",
  },
  {
    id: "activity_2",
    title: "Completed Practice Test: Physics",
    type: "Test",
    date: "2025-12-11T14:30:00Z",
  },
  {
    id: "activity_3",
    title: "Earned Badge: Chemistry",
    type: "Badge",
    date: "2025-12-10T09:15:00Z",
  },
];

export async function GET(req: NextRequest) {
  try {
    // Authentication check could go here

    return NextResponse.json(recentActivities);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch recent activities" },
      { status: 500 }
    );
  }
}
