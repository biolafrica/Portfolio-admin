import { createClient } from "@/app/utils/supabase/server"
import { NextResponse } from "next/server";
import fetchUser from "@/app/utils/supabase/fetchUser";

export async function POST(request){
  const blog = await request.json();

  const userData = await fetchUser();
  const author = userData.user.email;

  const updatedBlog ={
    ...blog,
    user: author
  }

  const supabase = await createClient();
  const {data, error}= await supabase
  .from("Blog")
  .insert([updatedBlog])
  .select()
  .single()


  if(error){
    throw new Error("Error adding task")
  }
  
  return NextResponse.json({data})
}
