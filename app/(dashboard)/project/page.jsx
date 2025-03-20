import Link from "next/link";
import { getProjects } from "@/app/utils/database/getTasks";

export default async function Project(){

  const projects = await getProjects();
  console.log(projects)
  
  return(
    <div className="project-cont">

      <div className="project-cont-head">
        <h3>Projects</h3>
        <Link href="/project/new" className="pri-btn">Add Project</Link>
      </div>

      <div className="project-cont-body">

        <div className="project-cont-body-search">
          <input type="search" name="search" placeholder="search projects"  />
        </div>

        <div className="project-cont-body-header">
          <h5>Project name</h5>
          <h5>Action</h5>
        </div>

        <div className="project-cont-body-body">

          <div className="project-cont-body-row">
            <h5>Humanforce</h5>
            <div className="action-cont">
              <img src="/icons/edit.svg" alt="edit icon" />
              <img src="/icons/delete.svg" alt="delete icon" />
            </div>
          </div>

          <div className="project-cont-body-row">
            <h5>Blog</h5>
            <div className="action-cont">
              <img src="/icons/edit.svg" alt="edit icon" />
              <img src="/icons/delete.svg" alt="delete icon" />
            </div>
          </div>

          <div className="project-cont-body-row">
            <h5>Mola</h5>
            <div className="action-cont">
              <img src="/icons/edit.svg" alt="edit icon" />
              <img src="/icons/delete.svg" alt="delete icon" />
            </div>
          </div>

        </div>

        <div className="project-cont-body-footer">
          <h5>Previous</h5>
          <h5>Next</h5>
        </div>

     
      </div>
      

    </div>
  )
}