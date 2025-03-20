import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";
import fetchUser from "@/app/utils/supabase/fetchUser";

export async function POST(request){
  const project = await request.json();

  const userData = await fetchUser();
  const author = userData.user.email;

  const updatedProject ={
    ...project,
    user: author
  }

  const supabase = await createClient();
  const {data, error}= await supabase
  .from("Project")
  .insert([updatedProject])
  .select()
  .single()


  if(error){
    throw new Error(error.message)
  }
  
  return NextResponse.json({data})
}