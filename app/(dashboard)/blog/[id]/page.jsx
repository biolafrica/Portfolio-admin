import AddBlogForm from "@/app/components/common/addBlogForm"
import {getBlog} from "@/app/utils/database/getTask";

export default async function EditBlog({params}){
  const {id} = await params;
  const blog = await getBlog(id);

  return(
    <>
      <h4 style={{textAlign: "center"}}>Edit blog post</h4>
      <AddBlogForm blog={blog} id={id}/>
    </>
  )

}