import React from 'react'

const ToDo = (props) => {
    
        return (
            <div className="task">
                <div className="label"> {props.task.category}</div>
                <div className="text"> {props.task.text}</div>
                <button onClick={() => props.handleDelete(props.index)} className="delete">X</button>
            </div>
        )
    
}

export default ToDo 
