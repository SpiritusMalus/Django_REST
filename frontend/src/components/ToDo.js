import React from "react";
import {Link} from "react-router-dom";
//Это логика поиска имени для вывода в фронт. Не знаю как написать
// todo.project === project.id
// project.users === users.id => users.first_name
const ToDoItem = ({todo, deleteToDo}) => {
    // let is_act = todo.is_active.toString()
    // // Для красоты
    // if (is_act){
    //     is_act = 'Активно'
    // } else {
    //     is_act = 'Завершен'
    // }
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
               {todo.is_active.toString()}
           </td>
           <td>
               <button onClick={()=>deleteToDo(todo.id)} type='button'>Delete</button>

           </td>
       </tr>
   )
}


const ToDoList = ({todos, deleteToDo}) => {
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
           {todos.map((todo) => <ToDoItem todo={todo} deleteToDo={deleteToDo}/>)}
           <Link to='/ToDo/create'>Create</Link>
       </table>
   )
}
export default ToDoList