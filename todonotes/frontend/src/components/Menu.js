import React from "react";
import {Link} from "react-router-dom";

// В скобках видимо передаётся всё, что лежит в App.js
export default function MenuItems (auth)  {

  return (

      <div className="btn-group">
          <Link className="btn btn-primary" aria-current="page" to='/'>Users</Link>
          <Link className="btn btn-primary" to='/project'>Project</Link>
          <Link className="btn btn-primary" to='/ToDo'>TODO</Link>
          {auth.is_auth ? <button onClick={auth.logout}>Logout</button> :
              <Link className="btn btn-primary" to='/login'>Login</Link>}
      </div>
  )
}


