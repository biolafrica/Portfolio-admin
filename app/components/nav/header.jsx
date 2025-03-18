import Link from "next/link";


export default function AdminNav({header}){

  const handleLogout = ()=>{
    console.log('log out')
  }
 

  return(
    <div className="adminavbar_cont">

      <div className="left_container">
        <Link href="" className="side-logo">
          <img src="/icons/logo.svg" alt="abiodun logo" />
        </Link>

      </div>

      <div className="right_container">
        <div className="left-adminav">
          <h4>{header}</h4>
        </div>

        <div className="right-adminav">
          
          <Link href="" className="right-icon">
            <h4>AB</h4>
          </Link>

          <button onClick={handleLogout} className="right-logout text-btn">
            <img src="/icons/logout.svg" alt="logout icon" />
            <h4>Logout</h4>
          </button>

        </div>
      </div>

    </div>

  );

}
