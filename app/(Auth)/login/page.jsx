import AuthForm from "@/app/components/common/authForm"

export default function Login(){
  return(
    <div className="login-cont">
      <AuthForm state="login"/>
    </div>
  )
}