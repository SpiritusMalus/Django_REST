import React from "react";
//Это логика поиска имени для вывода в фронт. Не знаю как написать
// todo.project === project.id
// project.users === users.id => users.first_name
const ToDoItem = ({todo, project}) => {
    let is_act = todo.is_active.toString()
    // Для красоты
    if (is_act){
        is_act = 'Активно'
    } else {
        is_act = 'Завершен'
    }
   return (
       <tr>
           <td>
               {todo.id}
           </td>
           <td>
               {todo.text}
           </td>
           <td>
               {/*Доработать, не знаю как*/}
               {todo.project}
           </td>
           <td>
               {/*Доработать, не знаю как*/}
               {todo.users_name}
           </td>
           <td>
               {is_act}

           </td>
       </tr>
   )
}


const ToDoList = ({todos}) => {
   return (
       <table>
           <th class="p-3 mb-2 bg-success text-white">
               ID
           </th>
           <th class="p-3 mb-2 bg-warning text-dark">
               Text
           </th>
           <th class="p-3 mb-2 bg-warning text-dark">
               Project
           </th>
           <th className="p-3 mb-2 bg-warning text-dark">
               Users_name
           </th>
           <th className="p-3 mb-2 bg-warning text-dark">
               Active?
           </th>
           {todos.map((todo) => <ToDoItem todo={todo}/>)}
       </table>
   )
}
export default ToDoList