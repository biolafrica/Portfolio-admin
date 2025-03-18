export default function AddBlogForm(){
  return(
    <form className="addblog-cont">

      <div className="addblog-form">

        <label htmlFor="title">
          <h5>Title</h5>
          <input type="text" name="title"/>
        </label>

        <label htmlFor="content">
          <h5>Content</h5>
          <textarea name="content" id=""></textarea>
        </label>

        <label htmlFor="Excerpt">
          <h5>Excerpt</h5>
          <textarea name="excerpt" id=""></textarea>
        </label>

        <label htmlFor="image">
          <h5>Image</h5>
          <input type="file" />
        </label>

        <label htmlFor="read">
          <h5>Read</h5>
          <input type="text" name="read"/>
        </label>

        <label htmlFor="type">
          <h5>Type</h5>
          <select name="type" id="">
            <option value="">Choose Type</option>
            <option value="tech">Tech</option>
            <option value="tech">Life</option>
          </select>
        </label>

        <label htmlFor="visibility">
          <h5>Visibility</h5>
          <select name="visibility" id="">
            <option value="">Choose Visibility</option>
            <option value="visible">Visible</option>
            <option value="hidden">Hidden</option>
          </select>
        </label>

        <button className="pri-btn" type="submit">Save</button>

      </div>

    </form>

  )
}