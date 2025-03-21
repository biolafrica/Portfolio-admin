import { createClient } from "../supabase/server";

export async function getBlogs(){
  const supabase = await createClient();

  const {data, error} = await supabase
  .from("Blog")
  .select()

  if(error){
    console.log('Error fetching blog', error.message)
    throw new Error("Error fetching blog")
  }

  return (data);
}

export async function getProjects(){
  const supabase = await createClient();

  const {data, error} = await supabase
  .from("Project")
  .select()

  if(error){
    console.log('Error fetching project', error.message)
    throw new Error("Error fetching project")
  }

  return (data);

}

export async function getUsers(){}