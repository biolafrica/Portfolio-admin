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

export const getTask= {
  supabase: null,
  
  async init(){
    if(!this.supabase){
      this.supabase = await createClient();
    }
  },

  async getSingleRow(table, id){
    await this.init();

    const {data, error}= await this.supabase
    .from(table)
    .select()
    .eq("id", id)
    .single();
   
    if (error) {
      console.log(`Error fetching ${id} for ${table}`, error.message)
      redirect('/not-found')
    }

    return data;

  },

  async blog(id){
    return await this.getSingleRow("Blog", id);
  },

  async project(id){
    return await this.getSingleRow("Project", id);
  }
}