"use client"

export default function AuthForm({state}){
  return (
    <div className="auth-form">

      {state === "register" ? (<h4><b>Register</b></h4>):(<h4><b>Login</b></h4>)}

      {state === "register" && (
        <label htmlFor="name">
          <h5>Full Name</h5>
          <input type="text" name="name" />
        </label>
      )}

      <label htmlFor="email">
        <h5>Email Address</h5>
        <input type="email" name="email" />
      </label>

      <label htmlFor="password">
        <h5>Password</h5>
        <input type="password" name="password" />
      </label>

      {state === "register" ?(<button className="pri-btn">Register</button>):(<button className="pri-btn">Login</button>) }

    </div>
  )
}