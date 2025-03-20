import { createClient } from "../supabase/server";

export async function addBlog(updatedBlog){
  const supabase = await createClient();

  const {data, error}= await supabase
  .from("Blog")
  .insert([updatedBlog])
  .select()
  .single()

  if(error){
    throw new Error(error.message)
  }
  return data;

}

export async function addProject(updatedProject){
  const supabase = await createClient();

  const {data, error}= await supabase
  .from("Project")
  .insert([updatedProject])
  .select()
  .single()

  if(error){
    throw new Error(error.message)
  }
  
  return data;

}