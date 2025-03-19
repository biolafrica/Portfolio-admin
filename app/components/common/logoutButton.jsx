"use client"

import { createClient } from "@/app/utils/supabase/client"
import { useRouter } from "next/navigation";

export default function LogoutButton(){
  const supabase = createClient();
  const router = useRouter()

  const handleLogout= async()=>{
    const {error} = await supabase.auth.signOut();
    if(error){
      router.push("")
    }
    router.push("/login")
  }

  return(
    <button onClick={handleLogout} className="right-logout text-btn">

      <img src="/icons/logout.svg" alt="logout icon" />
      <h4>Logout</h4>

    </button>

  )
}