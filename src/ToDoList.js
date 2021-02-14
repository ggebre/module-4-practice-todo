import React from 'react' 
import ToDo from './ToDo'

const ToDoList = (props) => {

return (props.tasks.map((task, index) => <ToDo index={index} task={task} handleDelete={props.handleDelete} key={index} />))
}
    


export default ToDoList