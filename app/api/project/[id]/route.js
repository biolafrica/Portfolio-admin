import { deleteProject } from "@/app/utils/database/deleteTask";
import { NextResponse } from "next/server";

export async function DELETE(__, {params}){
  const {id} = await params;

  const error = await deleteProject(id);
  return NextResponse.json({error})

}