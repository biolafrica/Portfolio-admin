import { createClient } from "../supabase/server";

export const addTask= {
  supabase: null,
  
  async init(){
    if(!this.supabase){
      this.supabase = await createClient();
    }
  },

  async addSingleRow(table,payload){
    await this.init();

    const {data, error}= await this.supabase
    .from(table)
    .insert([payload])
    .select()
    .single()


    if (error) {
      console.log(`error adding ${table}`, error.message);
      throw new Error(error);
    }

    return data;

  },

  async blog(payload){
    return await this.addSingleRow("Blog", payload);
  },

  async project(payload){
    return await this.addSingleRow("Project", payload);
  }
}