import { createClient } from "../supabase/server";

export default async function addTasks(tasks){
  const supabase = await createClient();

  const {data, error}= await supabase
  .from()
  .insert([])
  .select()
  .single()

  if(error){
    throw new Error("Error adding task")
  }

  return data;

}