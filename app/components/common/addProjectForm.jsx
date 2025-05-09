"use client"

import useForm from "@/app/hooks/useForm"
import { createClient } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react"


export default function AddProjectForm({project, id}){

  const initialValues = {
    title: project?.title ||  "",
    sub_title: project?.sub_title || "",
    introduction: project?.introduction || "",
    development_process: project?.development_process || "",
    technical_implementation: project?.technical_implementation || "",
    result_impact : project?.result_impact || "",
    next_step_reflection: project?.next_step_reflection || "",
    image: project?.image || "",
    demo_video: project?.demo_video || "",
    excerpt: project?.excerpt || "",
    github_link: project?.github_link || "",
    website_link: project?.website_link || "",
    stackI: project?.stackI || "",
    stackII: project?.stackII || "",
    stackIII: project?.stackIII || "",
    user: project?.user || ""

  }

  const{formData, resetForm, handleInputChange}= useForm(initialValues);
  const [imageFile, setImageFile]= useState(null);
  const [videoFile, setVideoFile]= useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [uploading, setUploading] = useState("");
  const supabase = createClient();
  const router = useRouter();

  const handleUpload=async()=>{

    const imageFileExt = imageFile.name.split(".").pop();
    const videoFileExt = videoFile.name.split(".").pop();

    const imageFileName = `${Date.now()}.${imageFileExt}`;
    const videoFileName = `${Date.now()}.${videoFileExt}`;

    const imageFilePath = `uploads/${imageFileName}`;
    const videoFilePath = `uploads/${videoFileName}`;

    const {error:imageError} = await supabase.storage.from("media").upload(imageFilePath, imageFile);
    const {error:videoError} = await supabase.storage.from("media").upload(videoFilePath, videoFile);

    if (imageError || videoError){
      return setErrorMessage(imageError?.message || videoError?.message) 
    }

    const imagePublicUrl = supabase.storage.from("media").getPublicUrl(imageFilePath).data.publicUrl;
    const videoPublicUrl = supabase.storage.from("media").getPublicUrl(videoFilePath).data.publicUrl;

    return {imagePublicUrl, videoPublicUrl}

  }

  const handleFormSubmit= async(e)=>{
    e.preventDefault();
    setUploading(true);

    if(project){
      let updatedFormData = {...formData}

      if(imageFile || videoFile){
        const {imagePublicUrl, videoPublicUrl} = await handleUpload();

        updatedFormData = {
          ...formData,
          image: imagePublicUrl,
          demo_video: videoPublicUrl,
        }

      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/project`, {
        method: 'PUT',
        headers: {"Content-Type" : "application/json"},
        body : JSON.stringify({updatedFormData, id})

      })

      const project = await res.json();
      if(project.data){
        router.push("/project")
      }


    }else{

      const {imagePublicUrl, videoPublicUrl} = await handleUpload();
      const updatedFormData = {
        ...formData,
        image: imagePublicUrl,
        demo_video: videoPublicUrl,
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/project`, {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body : JSON.stringify(updatedFormData)

      })

      const project = await res.json();
      if(project.data){
        router.push("/project")
      }

    }

    setUploading(false)
    resetForm();
   
  }

  return(
    <form className="add-blog-form" onSubmit={handleFormSubmit}>

      {errorMessage && <h4 className="error">{errorMessage}</h4>}

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

      <label htmlFor="sub_title">
        <h5>Sub Title</h5>
        <input 
          type="text" 
          name="sub_title"
          value={formData.sub_title}
          onChange={handleInputChange} 
          required
        />
      </label>

      <label htmlFor="introduction">
        <h5>Introduction</h5>
        <textarea 
          name="introduction"
          value={formData.introduction} 
          onChange={handleInputChange}
          required
        ></textarea>
      </label>

      <label htmlFor="development_process">
        <h5>Development Process</h5>
        <textarea 
          name="development_process" 
          value={formData.development_process}
          onChange={handleInputChange}
          required
        ></textarea>
      </label>

      <label htmlFor="technical_implementation">
        <h5>Technical Implementation</h5>
        <textarea 
          name="technical_implementation" 
          value={formData.technical_implementation}
          onChange={handleInputChange}
          required
        ></textarea>
      </label>

      <label htmlFor="result_impact">
        <h5>Result and Impact</h5>
        <textarea 
          name="result_impact" 
          value={formData.result_impact}
          onChange={handleInputChange}
          required
        ></textarea>
      </label>

      <label htmlFor="next_step_reflection">
        <h5>Next Step and Reflection</h5>
        <textarea 
          name="next_step_reflection" 
          value={formData.next_step_reflection}
          onChange={handleInputChange}
          required
        ></textarea>
      </label>

      <label htmlFor="image">
        <h5>Image</h5>
        <input 
          type="file" 
          name="image"
          onChange={(e)=>setImageFile(e.target.files[0])} 
          required={!project}
        />
      </label>

      <label htmlFor="demo_video">
        <h5>Demo Video</h5>
        <input 
          type="file" 
          name="demo_video" 
          onChange={(e)=>setVideoFile(e.target.files[0])} 
          required={!project}
        />
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

      <label htmlFor="stackI">
        <h5>Stack I</h5>
        <select 
          name="stackI" 
          required
          value={formData.stackI}
          onChange={handleInputChange}
        >
          <option value="">Choose Stack</option>
          <option value="javaScript">Javascript</option>
          <option value="react">React.js</option>
          <option value="next">Next.js</option>
          <option value="nodejs">Node.js</option>
          <option value="mongodb">Mongodb</option>
          <option value="supabase">Supabase</option>
        </select>
      </label>

      <label htmlFor="stackII">
        <h5>Stack II</h5>
        <select 
          name="stackII"
          value={formData.stackII}
          onChange={handleInputChange}
        >
          <option value="">Choose Stack</option>
          <option value="javaScript">Javascript</option>
          <option value="react">React.js</option>
          <option value="next">Next.js</option>
          <option value="nodejs">Node.js</option>
          <option value="mongodb">Mongodb</option>
          <option value="supabase">Supabase</option>
        </select>
      </label>

      <label htmlFor="stackIII">
        <h5>Stack III</h5>
        <select 
          name="stackIII"
          value={formData.stackIII}
          onChange={handleInputChange}
        >
          <option value="">Choose Stack</option>
          <option value="javaScript">Javascript</option>
          <option value="react">React.js</option>
          <option value="next">Next.js</option>
          <option value="nodejs">Node.js</option>
          <option value="mongodb">Mongodb</option>
          <option value="supabase">Supabase</option>
        </select>
      </label>

      <label htmlFor="github_link">
        <h5>Github Link</h5>
        <input 
          type="text" 
          name="github_link"
          value={formData.github_link}
          onChange={handleInputChange} 
          required
        />
      </label>

      <label htmlFor="website_link">
        <h5>Website Link</h5>
        <input 
          type="text" 
          name="website_link" 
          value={formData.website_link}
          onChange={handleInputChange}
          required
        />
      </label>

      <button className="pri-btn" type="submit" disabled={uploading} >{uploading? "Uploading" : "Save"}</button>

    </form>
  )
}