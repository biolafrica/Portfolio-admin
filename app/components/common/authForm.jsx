"use client"

import { createClient } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function AuthForm({state}){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage]=useState("");
  const router = useRouter();

  const supabase = createClient();

  async function  handleFormSubmit(e){
    e.preventDefault();

    if(state === "register"){

      const{error} = await supabase.auth.signUp({email, password,
        options:{
        data:{
          name,
        }
      }});

      if(error){
        return setErrorMessage(error.message);
      }
      router.push("/auth/verify")

    }else{
      const {error} = await supabase.auth.signInWithPassword({email, password});

      if(error){
        return setErrorMessage(error.message)
      }

      router.push("/")
    }
  }

  return (
    <form className="auth-form" onSubmit={handleFormSubmit}>

      {state === "register" ? (<h4><b>Register</b></h4>):(<h4><b>Login</b></h4>)}

      {errorMessage && <h4 className="error">{errorMessage}</h4>}

      {state === "register" && (
        <label htmlFor="name">
          <h5>Full Name</h5>
          <input 
            type="text" 
            name="name" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </label>
      )}

      <label htmlFor="email">
        <h5>Email Address</h5>
        <input 
          type="email" 
          name="email" 
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </label>

      <label htmlFor="password">
        <h5>Password</h5>
        <input 
          type="password" 
          name="password" 
          required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </label>

  
      <button className="pri-btn" type="submit">
        {state === "register" ?(<h5>Register</h5>):(<h5>Login</h5>)}
      </button>

    </form>
  )
}