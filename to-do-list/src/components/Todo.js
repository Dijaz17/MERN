import React from 'react';


const Todo = (props) => {
    return(
        <div className='task'>
            <h1 className={props.checked ? 'complete' : ''}>{props.text}</h1>
            <input type='checkbox' className='formCheck' checked={props.checked} onChange={() => props.checkTask(props.index)} /> 
            <button className='button' onClick={() => props.deleteTask(props.index)}>Delete Task</button>
        </div>
    )
}

export default Todo;