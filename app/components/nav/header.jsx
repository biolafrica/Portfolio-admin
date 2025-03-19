import Link from "next/link";
import LogoutButton from "../common/logoutButton";
import UserIcon from "../common/userIcon";


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
          
          <UserIcon/>
          <LogoutButton/>

        </div>
      </div>

    </div>

  );

}
