import Link from "next/link"

export default function Footer(){
  const year = new Date().getFullYear();

  return(
    
    <div className="copyright">
      <h6>Copyright &copy; {year} Abiodun Biobaku</h6>
    </div>
  )

}