"use client"

export default function error({error, reset}){
  return(
    <main className="redirect">
      <h3>Oh No</h3>
      <h5>{error.message}</h5>
      <button onClick={reset}><h4>Maybe Try Again</h4></button>
    </main>
  )

}