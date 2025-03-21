import { deleteBlog } from "@/app/utils/database/deleteTask";
import { NextResponse } from "next/server";

export async function DELETE(__, {params}){
  const {id} = await params;
  console.log("received id", id)

  const error = await deleteBlog(id);
  return NextResponse.json({error})

}