"use client"

import { useState } from "react"
import Pagination from "./pagination";
import usePagination from "@/app/hooks/usePagination";
import { useRouter } from "next/navigation";


export default function BlogList({blogs}){
  const router = useRouter();

  const handleDelete = async(id)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog/${id}`,{
      method: 'DELETE',
    })

    const blog = await res.json();

    if(blog.error){
      console.log("error deleting user")
    }else {
      router.refresh()
    }

  }

  const [searchTerm, setSearchTerm]= useState("");
  const filteredBlogs = blogs.filter(blog => (blog.title).toLowerCase().includes(searchTerm.toLowerCase()))
  const {
    currentData, 
    currentPage, 
    totalPages, 
    goToNextPage, 
    goToPreviousPage} = usePagination(filteredBlogs, 5)

  return(
    <>

      <div className="blog-cont-body-search">
        <input 
          type="search" 
          name="search"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          placeholder="search blogs"  
        />
      </div>

      <div className="blog-cont-body-header">
        <h5>Blog title</h5>
        <h5>Action</h5>
      </div>
      
      <div className="blog-cont-body-body">

        {currentData.length !== 0 ? 
          ( currentData.map((blog=>(
              <div className="blog-cont-body-row" key={blog.id}>
                <h5>{blog.title}</h5>
                <div className="action-cont">
                  <img src="/icons/edit.svg" alt="edit icon" onClick={()=>router.push(`/blog/${blog.id}`)}/>
                  <img src="/icons/delete.svg" alt="delete icon" onClick={()=>handleDelete(blog.id)}/>
                </div>
              </div>
          
            )))
          ):(<h4 className="empty">No Blogs Available</h4>)
        }

      </div>

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        goToNextPage={goToNextPage} 
        goToPreviousPage={goToPreviousPage}
      />

    </>
  )
}