import React from "react";
import {Link} from "react-router-dom";


const ProjectItem = ({project, deleteProject}) => {
   return (
       <tr>
           <td>
               {project.id}
           </td>
           <td>
               {project.name}
           </td>
           <td>
               {project.users}
           </td>
           <th>
               <button onClick={()=>deleteProject(project.id)} type='button'>Delete</button>
           </th>

       </tr>
   )
}


const ProjectList = ({projects, deleteProject, searchProject}) => {

    function handleSubmit(event){
        searchProject(projects)
        event.preventDefault()
        }
    function handleChange(event)
        {
            projects = event.target.value
        }
   return (
       <table>
           <th class="p-3 mb-2 bg-success text-white">
               ID
           </th>
           <th class="p-3 mb-2 bg-warning text-dark">
               name
           </th>
           <th class="p-3 mb-2 bg-warning text-dark">
               users
           </th>
           <th>

           </th>
           {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject}/>)}
           <div>
               <form onSubmit={(event) => handleSubmit(event)}>
                   <div className="form-group">
                       <input className='form-control' type="text" name='projects'  placeholder='Project name'
                              onChange={(event) => handleChange(event)}/>
                       <input className='btn btn-warning' type="submit" value='GO!'/>
                   </div>
               </form>
           </div>
           <ul>
               <li>
                   <Link to='/project/create'>Create</Link>
               </li>
           </ul>
       </table>
   )
}
export default ProjectList