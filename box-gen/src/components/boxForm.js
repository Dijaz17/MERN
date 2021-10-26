import React, {useState} from 'react'

const BoxForm = (props) => {
    const [boxGen, setBoxGen] = useState('');

    const handleBoxGen = (event) => {
        console.log(event.target.value);
        setBoxGen(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newBox = boxGen;

        props.setBoxes([...props.boxes, newBox]);
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Color: </label>
                    <input type='text' name='boxCol' onChange={handleBoxGen}/>
                    <input type='submit'></input>
                </div>
            </form>
        </div>
    )
}

export default BoxForm;