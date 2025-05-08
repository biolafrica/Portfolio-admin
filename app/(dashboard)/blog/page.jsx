import Link from "next/link";
import BlogList from "@/app/components/common/blogList";
import { getTasks } from "@/app/utils/database/getTasks";

export default async function Blog(){
  const blogs = await getTasks.blogs();

  return(
    <div className="blog-cont">

      <div className="blog-cont-head">
        <h3>Blog</h3>
        <Link className="pri-btn" href="/blog/new">Add Blog</Link>
      </div>

      <div className="blog-cont-body">
        <BlogList blogs={blogs}/>
      </div>
      

    </div>
  )
}