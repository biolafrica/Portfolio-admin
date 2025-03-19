import Link from "next/link";
import LogoutButton from "../common/logoutButton";


export default function AdminNav({header}){

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

          <LogoutButton/>

        </div>
      </div>

    </div>

  );

}
