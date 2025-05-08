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

export async function deleteProject(id){
  const supabase = await createClient();

  const {error} = await supabase
  .from("Project")
  .delete()
  .eq("id", id)

  if(error){
    return error
  }

}

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

  async deleteBlog(id){
    return await this.deleteSingleRow("Blog", id);
  },

  async deleteProject(id){
    return await this.deleteSingleRow("Project", id);
  }
}