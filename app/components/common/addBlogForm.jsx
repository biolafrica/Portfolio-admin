"use client"

import useForm from "@/app/hooks/useForm"
import { createClient } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AddBlogForm({blog, id}){

  const initialValues = {
    title: blog?.title || "",
    content: blog?.content || "",
    excerpt: blog?.excerpt || "",
    image: blog?.image || "", 
    images: blog?.images || [], 
    read: blog?.read || "",
    type: blog?.type || "",
    visibility: blog?.visibility ||  "",
    user: blog?.user || ""
  }

  const {formData, handleInputChange, resetForm}= useForm(initialValues);

  // Changed to handle 3 separate image files
  const [imageFile1, setImageFile1] = useState(null);
  const [imageFile2, setImageFile2] = useState(null);
  const [imageFile3, setImageFile3] = useState(null);
  
  const [uploading, setUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const supabase = createClient();
  const router = useRouter();

  // Generic function to upload a single image
  const uploadSingleImage = async (file) => {
    if (!file) return null;

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `uploads/${fileName}`;

    const {error} = await supabase.storage
      .from("media")
      .upload(filePath, file)

    if (error){
      throw new Error(error.message);
    }

    const publicUrl = supabase.storage
      .from("media")
      .getPublicUrl(filePath).data.publicUrl;

    return publicUrl;
  }

  // Upload all images
  const handleMultipleImagesUpload = async () => {
    const uploadedUrls = [];
    
    try {
      // Upload each image that exists
      if (imageFile1) {
        const url1 = await uploadSingleImage(imageFile1);
        if (url1) uploadedUrls.push(url1);
      }
      
      if (imageFile2) {
        const url2 = await uploadSingleImage(imageFile2);
        if (url2) uploadedUrls.push(url2);
      }
      
      if (imageFile3) {
        const url3 = await uploadSingleImage(imageFile3);
        if (url3) uploadedUrls.push(url3);
      }

      return uploadedUrls;
    } catch (error) {
      setErrorMessage(error.message);
      return [];
    }
  }

 

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setErrorMessage("");

    try {
      let updatedFormData = {...formData};

      // Handle image uploads
      if (imageFile1 || imageFile2 || imageFile3) {
        const uploadedImageUrls = await handleMultipleImagesUpload();
        
        if (uploadedImageUrls.length > 0) {
          updatedFormData = {
            ...formData,
            images: uploadedImageUrls,
            image: uploadedImageUrls[0] || formData.image // First image as main image for backwards compatibility
          };
        }
      }

      console.log("Final form data to submit:", updatedFormData);

      if (blog) {
        // Updating existing blog
        // If no new images uploaded, keep existing images
        if (!imageFile1 && !imageFile2 && !imageFile3 && blog.images) {
          updatedFormData.images = blog.images;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog`, {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({updatedFormData, id})
        });

        const result = await res.json();
        if (result.data) {
          router.push("/blog");
        }

      } else {
        // Creating new blog
        // Require at least one image for new posts
        if (!imageFile1) {
          setErrorMessage("Please upload at least one image");
          setUploading(false);
          return;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(updatedFormData)
        });

        const result = await res.json();
        if (result.data) {
          router.push("/blog");
        }
      }

      resetForm();
    } catch (error) {
      setErrorMessage(error.message || "An error occurred");
    } finally {
      setUploading(false);
    }
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
            placeholder="Write your blog content here..."
            rows="15"
          ></textarea>
        </label>

        <label htmlFor="excerpt">
          <h5>Excerpt</h5>
          <textarea 
            name="excerpt"
            value={formData.excerpt} 
            onChange={handleInputChange}
            required
            placeholder="A short summary of your blog post..."
            rows="3"
          ></textarea>
        </label>

        {/* Image Upload Section */}
        <div className="image-upload-section">
          <h5>Images (Upload 1-3 images)</h5>
          <p className="helper-text">Images will be automatically placed throughout your blog post</p>
          
          <label htmlFor="image1" className="image-input-label">
            <h6>Image 1 {!blog && <span className="required">*Required</span>}</h6>
            <input 
              type="file" 
              id="image1"
              name="image1"
              accept="image/*"
              required={!blog}
              onChange={(e) => setImageFile1(e.target.files[0])}
            />
            {imageFile1 && <span className="file-name">✓ {imageFile1.name}</span>}
          </label>

          <label htmlFor="image2" className="image-input-label">
            <h6>Image 2 <span className="optional">(Optional)</span></h6>
            <input 
              type="file" 
              id="image2"
              name="image2"
              accept="image/*"
              onChange={(e) => setImageFile2(e.target.files[0])}
            />
            {imageFile2 && <span className="file-name">✓ {imageFile2.name}</span>}
          </label>

          <label htmlFor="image3" className="image-input-label">
            <h6>Image 3 <span className="optional">(Optional)</span></h6>
            <input 
              type="file" 
              id="image3"
              name="image3"
              accept="image/*"
              onChange={(e) => setImageFile3(e.target.files[0])}
            />
            {imageFile3 && <span className="file-name">✓ {imageFile3.name}</span>}
          </label>
        </div>

        <label htmlFor="read">
          <h5>Read Time (in minutes)</h5>
          <input 
            type="number" 
            name="read" 
            required
            value={formData.read}
            onChange={handleInputChange}
            placeholder="e.g., 5"
            min="1"
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
            <option value="TECH">Tech</option>
            <option value="LIFE">Life</option>
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

        <button className="pri-btn" type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : blog ? "Update Blog" : "Create Blog"}
        </button>

      </div>

    </form>
  )
}