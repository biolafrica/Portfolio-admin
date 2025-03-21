import { NextResponse } from "next/server";
import fetchUser from "@/app/utils/supabase/fetchUser";
import { addProject } from "@/app/utils/database/addTasks";
import { editProject } from "@/app/utils/database/editTask";


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

export async function PUT(request){
  const project = await request.json();
  const {id, updatedFormData} = project;

  const data = editProject(updatedFormData, id)
  console.log(data)
  return NextResponse.json({data})


}