import Link from "next/link";

export default function Blog(){
  return(
    <div className="blog-cont">

      <div className="blog-cont-head">
        <h3>Blog</h3>
        <Link className="pri-btn" href="/project/new">Add Blog</Link>
      </div>

      <div className="blog-cont-body">

        <div className="blog-cont-body-search">
          <input type="search" name="search" placeholder="search blogs"  />
        </div>

        <div className="blog-cont-body-header">
          <h5>Blog name</h5>
          <h5>Action</h5>
        </div>

        <div className="blog-cont-body-body">

          <div className="blog-cont-body-row">
            <h5>2025 in Retrospect</h5>
            <div className="action-cont">
              <img src="/icons/edit.svg" alt="edit icon" />
              <img src="/icons/delete.svg" alt="delete icon" />
            </div>
          </div>

          <div className="blog-cont-body-row">
            <h5>Coding is !Hard</h5>
            <div className="action-cont">
              <img src="/icons/edit.svg" alt="edit icon" />
              <img src="/icons/delete.svg" alt="delete icon" />
            </div>
          </div>

          <div className="blog-cont-body-row">
            <h5>React.js vs Next.js</h5>
            <div className="action-cont">
              <img src="/icons/edit.svg" alt="edit icon" />
              <img src="/icons/delete.svg" alt="delete icon" />
            </div>
          </div>

        </div>

        <div className="blog-cont-body-footer">
          <h5>Previous</h5>
          <h5>Next</h5>
        </div>

     
      </div>
      

    </div>
  )
}