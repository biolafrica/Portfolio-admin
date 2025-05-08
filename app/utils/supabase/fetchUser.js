import { redirect } from "next/navigation";
import { createClient } from "./server";

export default async function fetchUser(){
  const supabase  = await createClient();

  const{data, error} = await supabase.auth.getUser();

  if(error || !data?.user){
    redirect("/login")
  }
  const userData = data.user;
  const userEmail = userData.email
  const userName = userData.user_metadata.name

  return {data, userName, userEmail}
 
}