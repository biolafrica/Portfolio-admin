"use client"

export default function AddProjectForm(){
  return(
    <form className="add-blog-form">

      <label htmlFor="title">
        <h5>Title</h5>
        <input type="text" name="title" required/>
      </label>

      <label htmlFor="sub-title">
        <h5>Sub Title</h5>
        <input type="text" name="sub-title" required/>
      </label>

      <label htmlFor="introduction">
        <h5>Introduction</h5>
        <textarea name="introduction" id="" required></textarea>
      </label>

      <label htmlFor="development">
        <h5>Development Process</h5>
        <textarea name="development" id="" required></textarea>
      </label>

      <label htmlFor="implementation">
        <h5>Technical Implementation</h5>
        <textarea name="implementation" id="" required></textarea>
      </label>

      <label htmlFor="result">
        <h5>Result and Impact</h5>
        <textarea name="result" id="" required></textarea>
      </label>

      <label htmlFor="next">
        <h5>Next Step and Reflection</h5>
        <textarea name="next" id="" required></textarea>
      </label>

      <label htmlFor="image">
        <h5>Image</h5>
        <input type="file" name="image" required/>
      </label>

      <label htmlFor="video">
        <h5>Demo Video</h5>
        <input type="file" name="video"  required/>
      </label>

      <label htmlFor="excerpt">
        <h5>Excerpt</h5>
        <textarea name="excerpt" id="" required></textarea>
      </label>

      <label htmlFor="github">
        <h5>Github Link</h5>
        <input type="text" name="github" required/>
      </label>

      <label htmlFor="website">
        <h5>Website Link</h5>
        <input type="text" name="website" required/>
      </label>

      <button className="pri-btn" type="submit">Save</button>

    </form>
  )
}