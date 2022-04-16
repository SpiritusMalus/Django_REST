import React from "react";


const ProjectItem = ({project}) => {
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
       </tr>
   )
}


const ProjectList = ({projects}) => {
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
           {projects.map((project) => <ProjectItem project={project}/>)}
       </table>
   )
}
export default ProjectList