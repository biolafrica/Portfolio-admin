import { createClient } from "../supabase/server";
import { redirect } from "next/navigation";

export async function getBlog(id){
  const supabase =  await createClient();

  const {data, error}= await supabase
  .from("Blog")
  .select()
  .eq("id", id)
  .single()

  if(error){
    console.log(`Error fetching ${id} blog`, error.message)
    redirect('/not-found')
  }

  return data;

}

export async function getProject(id){
  const supabase =  await createClient();

  const {data, error}= await supabase
  .from("Project")
  .select()
  .eq("id", id)
  .single()

  if(error){
    console.log(`Error fetching ${id} project`, error.message)
    redirect('/not-found')
  }

  return data;

}