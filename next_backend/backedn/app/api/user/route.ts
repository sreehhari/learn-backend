import { NextRequest } from "next/server";

export async function POST(req:NextRequest){

    //extract the body
    const body = await req.json();
    console.log(body);
    //store the body in the db
    return Response.json({
        message:"you are logged in"
    })
}