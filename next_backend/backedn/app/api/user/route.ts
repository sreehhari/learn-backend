import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function POST(req:NextRequest){
const client = new PrismaClient();

    //extract the body
    const body = await req.json();
    try{
    const res =await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })

}catch(e){
    NextResponse.json({
        message:"some error "+e
    })
}
    //store the body in the db
    return NextResponse.json({
        message:"you are logged in",
    })
}
