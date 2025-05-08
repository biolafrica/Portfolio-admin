import Link from "next/link";
import fetchUser from "@/app/utils/supabase/fetchUser";

export default async function User(){
  const {userName,userEmail} = await fetchUser();

  return(

    <div className="user-cont">

      <div className="user-cont-head">
        <h3>users</h3>
        <Link href="/register" className="pri-btn">Add user</Link>
      </div>

      <div className="user-cont-body">

        <div className="user-cont-body-search">
          <input type="search" name="search" placeholder="search users"  />
        </div>

        <div className="user-cont-body-header">
          <h5>user name</h5>
          <h5>Email address</h5>
        </div>

        <div className="user-cont-body-body">

          <div className="user-cont-body-row">
            <h5>{userName}</h5>
            <h5>{userEmail}</h5>
          </div>

        </div>

        <div className="page-cont-body-footer">
          <h5 style={{color: "#ffffffA6", cursor: "not-allowed"}}>Previous</h5>
          <h5 style={{color: "#ffffffA6", cursor: "not-allowed"}}>Next</h5>
        </div>

     
      </div>
      
    </div>
  )
}