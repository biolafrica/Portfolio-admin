import { NextResponse } from "next/server";
import fetchUser from "@/app/utils/supabase/fetchUser";
import { addProject } from "@/app/utils/database/addTasks";
import { updateTask } from "@/app/utils/database/editTask";


export async function POST(request){

  try {
    const project = await request.json();
    if(!project){
      return NextResponse.json({error : "invalid project data"}, {status :400})
    }

    const {user} = await fetchUser();
    if(!user){
      return NextResponse.json({error : "error fetching authorised user data"}, {status :400})
    }
    const author = user.email;

    const updatedProject = {
      ...project,
      user: author
    }

    const data = await addProject(updatedProject)
    if(!data){
      return NextResponse.json({error : "error adding project"}, {status :400})
    }

    return NextResponse.json({data}, {status: 200})
    
  } catch (error) {
    console.error("error adding project", error.message)
    return NextResponse.json({error : "server error"}, {status :500})
    
  }

}

export async function PUT(request){
  
  try {
    const {id, updatedFormData} = await request.json();

    if( !id || !updatedFormData){
      return NextResponse.json({error : "invalid project data form"}, {status :400})
    }

    const data = await updateTask.editProject(updatedFormData, id)
    if( !data){
      return NextResponse.json({error : "error updating project"}, {status :400})
    }

    return NextResponse.json({data}, {status: 200})
    
  } catch (error) {
    console.error("error updating project", error.message)
    return NextResponse.json({error : "server error"}, {status :500})
    
  }


}