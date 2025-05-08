import { deleteTask } from "@/app/utils/database/deleteTask";
import { NextResponse } from "next/server";

export async function DELETE(__, {params}){
  try {
    const {id} = await params;
    if(!id){
      return NextResponse.json({error : "invalid blog id params"}, {status :400})
    }

    const error = await deleteTask.blog(id);
    return NextResponse.json({error},{status: 401})
    
  } catch (error) {
    console.error("error deleting Blog", error.message)
    return NextResponse.json({error : "server error"}, {status :500})
  }
}