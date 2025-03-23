"use client"

import SideNav from "./sidebar"
import AdminNav from "./header"
import { useState } from "react"

export default function LayoutBody({children}){
  const [header, setHeader] = useState("Dashboard")

  function changeHeader(dashboard){
    setHeader(dashboard)
  }

  return(
    <div className="admin-layout">
      <SideNav changeHeader={changeHeader} />

      <div className="admin-content">
        <AdminNav header={header}/>

        <main>
          {children}
        </main>
      </div>

    </div>

  )
}