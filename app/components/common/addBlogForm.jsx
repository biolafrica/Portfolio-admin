"use client"

import useForm from "@/app/hooks/useForm"
import { createClient } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AddBlogForm(){

  const initialValues = {
    title: "",
    content: "",
    excerpt: "",
    image: "",
    read: "",
    type: "",
    visibility: "",
    user:""
  }

  const {formData, handleInputChange, resetForm, setFormData}= useForm(initialValues);

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const supabase =createClient();
  const router = useRouter();



  const handleFormSubmit= async(e)=>{
    e.preventDefault();
    setUploading(true)
  
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `uploads/${fileName}`;

    const {error} = await supabase.storage
    .from("media")
    .upload(filePath, file)

    if (error){
      return setErrorMessage(error.message)
    }

    const publicUrl = supabase.storage
    .from("media")
    .getPublicUrl(filePath).data.publicUrl;



    const updatedFormData = {
      ...formData,
      image: publicUrl
    }

    const res = await fetch("http://localhost:3001/api/blog",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedFormData)
    })

    const blog = await res.json()
 
    if(blog.data){
      router.push("/blog")
    }

    setUploading(false)
    resetForm();

  }


  return(
    <form className="addblog-cont" onSubmit={handleFormSubmit}>

      {errorMessage && <h4 className="error">{errorMessage}</h4>}

      <div className="addblog-form">

        <label htmlFor="title">
          <h5>Title</h5>
          <input 
            type="text" 
            name="title"
            value={formData.title}
            onChange={handleInputChange} 
            required
          />
        </label>

        <label htmlFor="content">
          <h5>Content</h5>
          <textarea 
            name="content"
            value={formData.content}
            onChange={handleInputChange} 
            required 
          ></textarea>
        </label>

        <label htmlFor="excerpt">
          <h5>Excerpt</h5>
          <textarea 
            name="excerpt"
            value={formData.excerpt} 
            onChange={handleInputChange}
            required
          ></textarea>
        </label>

        <label htmlFor="image">
          <h5>Image</h5>
          <input 
            type="file" 
            required
            name="image"
          
            onChange={(e)=>setFile(e.target.files[0])}
          />
        </label>

        <label htmlFor="read">
          <h5>Read</h5>
          <input 
            type="number" 
            name="read" 
            required
            value={formData.read}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="type">
          <h5>Type</h5>
          <select 
            name="type" 
            required
            value={formData.type}
            onChange={handleInputChange}
          >
            <option value="">Choose Type</option>
            <option value="tech">Tech</option>
            <option value="life">Life</option>
          </select>
        </label>

        <label htmlFor="visibility">
          <h5>Visibility</h5>
          <select 
            name="visibility" 
            required
            value={formData.visibility}
            onChange={handleInputChange}
          >
            <option value="">Choose Visibility</option>
            <option value="visible">Visible</option>
            <option value="hidden">Hidden</option>
          </select>
        </label>

        <button className="pri-btn" type="submit">{uploading ? "Uploading" : "Save" }</button>

      </div>

    </form>

  )
}