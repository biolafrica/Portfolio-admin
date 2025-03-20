import { NextResponse } from "next/server";
import fetchUser from "@/app/utils/supabase/fetchUser";
import { addProject } from "@/app/utils/database/addTasks";


export async function POST(request){
  const project = await request.json();

  const userData = await fetchUser();
  const author = userData.user.email;

  const updatedProject = {
    ...project,
    user: author
  }

  const data = addProject(updatedProject)
  return NextResponse.json({data})
}