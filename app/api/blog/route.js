import { NextResponse } from "next/server";
import fetchUser from "@/app/utils/supabase/fetchUser";
import { addBlog } from "@/app/utils/database/addTasks";
import {updateTask } from "@/app/utils/database/editTask";


export const dynamic = "force-dynamic"

export async function POST(request){
  try {
    const blog = await request.json();
    if(!blog){
      return NextResponse.json({error : "invalid blog data"}, {status :400})
    }

    const {user} = await fetchUser();
    if(!user){
      return NextResponse.json({error : "error fetching authorised user data"}, {status :400})
    }
    const author = user.email;

    const updatedBlog ={
      ...blog,
      user: author
    }

    const data = await addBlog(updatedBlog);
    if(!data){
      return NextResponse.json({error : "error adding Blog"}, {status :400})
    }

    return NextResponse.json({data}, {status:200})
    
  } catch (error) {
    console.error("error adding Blog", error.message)
    return NextResponse.json({error : "server error"}, {status :500})
  }

}

export async function PUT(request){
  try {
    const {updatedFormData, id} = await request.json();
    if(!id || !updatedFormData){
      return NextResponse.json({error : "invalid blog data form"}, {status :400})
    }

    const data = await updateTask.editBlog(updatedFormData, id);
    if(!data){
      return NextResponse.json({error : "error updating blog"}, {status :400})
    }

    return NextResponse.json({data}, {status:200})

  } catch (error) {
    console.error("error updating blog", error.message)
    return NextResponse.json({error : "server error"}, {status :500})
  }

}


