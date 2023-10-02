import { NextResponse } from "next/server";
import connection from "@/utils/db";

export const GET = async (request) =>{
    return new NextResponse ("hello ", {status:200})
}