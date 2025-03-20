"use client"

import { useState } from "react"



export default function BlogList({blogs}){
  const [searchTerm, setSearchTerm]= useState("");
  const filteredBlogs = blogs.filter(blog=> (blog.title).toLowerCase().includes(searchTerm.toLowerCase()))

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
        <h5>Blog name</h5>
        <h5>Action</h5>
      </div>
      
      <div className="blog-cont-body-body">

        {filteredBlogs.length !== 0 ? 
          ( filteredBlogs.map((blog=>(
              <div className="blog-cont-body-row" key={blog.id}>
                <h5>{blog.title}</h5>
                <div className="action-cont">
                  <img src="/icons/edit.svg" alt="edit icon" id={blog.id} />
                  <img src="/icons/delete.svg" alt="delete icon" id={blog.id} />
                </div>
              </div>
          
            )))
          ):(<h4 className="empty">No Blogs Available</h4>)
        }

      </div>

      <div className="blog-cont-body-footer">
        <h5>Previous</h5>
        <h5>Next</h5>
      </div>

    </>
  )
}