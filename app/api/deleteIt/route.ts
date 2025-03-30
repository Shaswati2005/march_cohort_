import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
    try {
        const body = await req.json();

    const { user, id } = body;

    const response = await fetch(
        `https://new-ucyk.onrender.com/delete_itinerary/${user}/${id}/`,
        { method: "DELETE" }
    );

    console.log(response);
    return NextResponse.json({response},{status:200})
    }
    catch (e:unknown) {
        console.log(e);
        return NextResponse.json("Error deleting itinerary", { status: 500 });
    }
    
}