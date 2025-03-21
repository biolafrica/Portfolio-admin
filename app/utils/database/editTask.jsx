import { createClient } from "../supabase/server";

export async function editBlog(updatedData, id){
  const supabase = createClient();

  const{error} = await supabase
  .from("Blog")
  .update(updatedData)
  .eq("id",id)

  if(error){
    console.log("error updating blog", error.message)
    throw new Error(error)
  }

  return data;

}