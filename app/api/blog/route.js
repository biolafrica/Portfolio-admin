import { NextResponse } from "next/server";
import fetchUser from "@/app/utils/supabase/fetchUser";
import { addBlog } from "@/app/utils/database/addTasks";
import { editBlog } from "@/app/utils/database/editTask";


export const dynamic = "force-dynamic"

export async function POST(request){
  const blog = await request.json();

  const userData = await fetchUser();
  const author = userData.user.email;

  const updatedBlog ={
    ...blog,
    user: author
  }

  const data = addBlog(updatedBlog);
  return NextResponse.json({data})
}

export async function PUT(request){
  const blog = await request.json();
  const {updatedFormData, id} = blog


  const data = editBlog(updatedFormData, id)
  return NextResponse.json({data})

}


