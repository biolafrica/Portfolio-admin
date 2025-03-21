import { createClient } from "../supabase/server";

export async function deleteBlog(id){
  const supabase = await createClient();

  const {error} = await supabase
  .from("Blog")
  .delete()
  .eq("id", id)

  if(error){
    return error
  }
    

}