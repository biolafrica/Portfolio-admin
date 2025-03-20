import Link from "next/link";
import { getProjects } from "@/app/utils/database/getTasks";
import ProjectList from "@/app/components/common/projectList";

export default async function Project(){

  const projects = await getProjects();
  
  return(
    <div className="project-cont">

      <div className="project-cont-head">
        <h3>Projects</h3>
        <Link href="/project/new" className="pri-btn">Add Project</Link>
      </div>

      <ProjectList projects={projects}/>
      

    </div>
  )
}