import { createClient } from "../supabase/server";

export const getTasks= {
  supabase: null,
  
  async init(){
    if(!this.supabase){
      this.supabase = await createClient();
    }
  },

  async getAllRow(table){
    await this.init();

    const {data, error}= await this.supabase
    .from(table)
    .select()
   

    if (error) {
      console.log(`error fetching ${table}`, error.message);
      throw new Error(error);
    }

    return data;

  },

  async blogs(){
    return await this.getAllRow("Blog");
  },

  async projects(){
    return await this.getAllRow("Project");
  }
}
