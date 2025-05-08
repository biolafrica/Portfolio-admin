import { createClient } from "../supabase/server";

export const updateTask= {
  supabase: null,
  
  async init(){
    if(!this.supabase){
      this.supabase = await createClient();
    }
  },

  async updateSingleRow(table,payload,id){
    await this.init();

    const { data, error,} = await this.supabase
    .from(table)
    .update(payload)
    .eq("id", id)
    .select()
    .maybeSingle();

    if (error) {
      console.log(`error updating ${table}`, error.message);
      throw new Error(error);
    }

    if (!data) {
      console.log(`No ${table} found with the given id:`, id);
      throw new Error(`No ${table} found`);
    }

    return data;

  },

  async editBlog(updatedData, id){
    return await this.updateSingleRow("Blog", updatedData, id);
  },

  async editProject(updatedData, id){
    return await this.updateSingleRow("Project", updatedData, id);
  }


}