import axios from 'axios';
import React, {useState} from 'react';

const Form = (props) => {
    const [form, setForm] = useState({
        title: '',
        price: '',
        description: ''
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value 
        });
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/api/products/new', form)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type='text' name='title' placeholder='product name' onChange={onChangeHandler} /><br />
                <input type='number' name='price' placeholder='price' onChange={onChangeHandler} /><br/>
                <input type='text'name='description' placeholder='description' onChange={onChangeHandler} /> <br/>
                <input type='submit' />
            </form>
        </div>
    )
}

export default Form;