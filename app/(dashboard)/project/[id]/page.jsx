import AddProjectForm from "@/app/components/common/addProjectForm";
import { getTask } from "@/app/utils/database/getTask";

export default async function EditProject({params}){
  const {id} = await params;
  const project = await getTask.project(id);

  return(
    <>
      <h4 style={{textAlign: "center"}}>Edit Project</h4>
      <AddProjectForm project={project} id={id} />
    </>
  )
}