import { createClient } from "../supabase/server";

export const deleteTask= {
  supabase: null,
  
  async init(){
    if(!this.supabase){
      this.supabase = await createClient();
    }
  },

  async deleteSingleRow(table, id){
    await this.init();

    const {error} = await this.supabase
    .from(table)
    .delete()
    .eq("id", id)

    if (error) {
      console.log(`error deleting ${table}`, error.message);
      throw new Error(error);
    }

  },

  async blog(id){
    return await this.deleteSingleRow("Blog", id);
  },

  async project(id){
    return await this.deleteSingleRow("Project", id);
  }
}