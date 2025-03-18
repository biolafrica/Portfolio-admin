export default function User(){
  return(

    <div className="user-cont">

      <div className="user-cont-head">
        <h3>users</h3>
        <button className="pri-btn">Add user</button>
      </div>

      <div className="user-cont-body">

        <div className="user-cont-body-search">
          <input type="search" name="search" placeholder="search users"  />
        </div>

        <div className="user-cont-body-header">
          <h5>user name</h5>
          <h5>Email address</h5>
        </div>

        <div className="user-cont-body-body">

          <div className="user-cont-body-row">
            <h5>Abiodun Biobaku</h5>
            <h5>biolafrica@gmail.com</h5>
          </div>

          <div className="user-cont-body-row">
            <h5>Abiodun Biobaku</h5>
            <h5>abiodun@yahoo.com</h5>
          </div>

          <div className="user-cont-body-row">
            <h5>Abiodun Biobaku</h5>
            <h5>Abeey@test.com</h5>
          </div>

        </div>

        <div className="user-cont-body-footer">
          <h5>Previous</h5>
          <h5>Next</h5>
        </div>

     
      </div>
      

    </div>
  )
}