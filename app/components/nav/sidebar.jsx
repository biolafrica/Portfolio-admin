import { useState, useEffect } from "react"
import Link from "next/link"

export default function SideNav({changeHeader}){
  const [activeTab, setActiveTab] = useState("Dashboard")

  useEffect(()=>{
    changeHeader(activeTab)

  },[setActiveTab, activeTab])
  
  const handleDashboardClick =()=>{
    setActiveTab("Dashboard")
  }
  const handleProjectClick =()=>{
    setActiveTab("Staff")
  }
  const handleBlogClick =()=>{
    setActiveTab("Team")
  }
  const handleUserClick =()=>{
    setActiveTab("Attendance")
  }


  return(
    <div className="sidebar-cont">

      <div className="side-nav">

        <Link 
          href=""
          className={`dashboard ${activeTab === "Dashboard" ? "active" : ""}`} 
          onClick={handleDashboardClick}
        >
          <img src="/icons/dashboard.svg" alt="dashboard icon" />
          <h4>Dashboard</h4>
        </Link>

        <Link 
          href=""
          className={`project ${activeTab === "Staff" ? "active" : ""}`}  
          onClick={handleProjectClick}
        >
          <img src="/icons/project.svg" alt="project icon" />
          <h4>Project</h4>
        </Link>

        <Link 
          href=""
          className={`blog ${activeTab === "Team" ? "active" : ""}`} 
          onClick={handleBlogClick}
        >
          <img src="/icons/blog.svg" alt="blog icon" />
          <h4>Blog</h4>
        </Link>

        <Link 
          href=""
          className={`user ${activeTab === "Attendance" ? "active" : ""}`} 
          onClick={handleUserClick}
        >
          <img src="/icons/user.svg" alt="user icon" />
          <h4>Users</h4>
        </Link>

      </div>

    </div>
  )

}
