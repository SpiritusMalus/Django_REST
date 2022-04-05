import React from "react";
import {Link} from "react-router-dom";

const MenuItems = () => {
  return (

      <div className="btn-group">
              <Link className="btn btn-primary" aria-current="page" to='/' activeClassName="active">Users</Link>
              <Link className="btn btn-primary" to='/project' activeClassName="active">Project</Link>
              <Link className="btn btn-primary" to='/ToDo' activeClassName="active">TODO</Link>
      </div>
  )
}

export default MenuItems
