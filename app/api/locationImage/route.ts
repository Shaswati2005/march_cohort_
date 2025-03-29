import { NextRequest, NextResponse } from "next/server";

const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY; // Store API key in .env.local

export async function GET(req: NextRequest) {
  try {
    const city = req.nextUrl.searchParams.get("query") || "nature"; // Default to "nature"
    console.log("Fetching images for:", city);

    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(city)}&per_page=1`,
      {
        method: "GET",
        headers: {
          Authorization: PEXELS_API_KEY || "", // Ensure API key is set
        },
      }
    );

    if (!response.ok) {
      console.error("Pexels API Error:", response.statusText);
      return NextResponse.json({ error: "Failed to fetch images" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
