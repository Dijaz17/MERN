import React, {useState} from 'react';


const Input = (props) => {
    const [currentTask, setCurrentTask] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newTask = {
            text: currentTask,
            checked: false
        };

        props.setTasks([...props.tasks, newTask]);
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div>
                <input type='text' onChange={ (event) => {setCurrentTask(event.target.value);}} />
                <input type='submit' className='button2' />
            </div>
        </form>
    )
}

export default Input;