import React from "react";


const UserItem = ({user}) => {
   return (
       <tr>
           <td>
               {user.first_name}
           </td>
           <td>
               {user.last_name}
           </td>
           <td>
               {user.username}
           </td>
       </tr>
   )
}

const UserList = ({users}) => {
   return (
       <table>
           <th class="p-3 mb-2 bg-success text-white">
               First name
           </th>
           <th class="p-3 mb-2 bg-warning text-dark">
               Last name
           </th>
           <th class="p-3 mb-2 bg-info text-dark">
               Username
           </th>
           {users.map((user) => <UserItem user={user}/>)}
       </table>
   )
}
export default UserList