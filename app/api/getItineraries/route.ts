import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const user = req.nextUrl.searchParams.get('user') || '6';
        const response = await fetch(
            `https://new-ucyk.onrender.com/get_itinerary_by_user/?user_id=${user}`
        );
        
        console.log(response);

        const data = await response.json();
        console.log(data);
        return NextResponse.json({ data },{status:200});
        
        
    } catch (err:unknown) {
        console.log(err)
        return NextResponse.json("Could not find itineraries",{status:500})
    }

    

}