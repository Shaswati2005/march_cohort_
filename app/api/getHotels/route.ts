import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

    const { itinerary } = body;

    const response = await axios.post(`http://new-ucyk.onrender.com/get_hotel_by_itinerary`, {
        data: {
            'itinerary': itinerary
        }
    });

    console.log(response);

    return NextResponse.json({ response }, { status: 200 });
    } catch (error: unknown) {
        return NextResponse.json("Could not fetch hotels",{status:500})
    }
}