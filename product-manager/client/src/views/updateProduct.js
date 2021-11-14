import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const UpdateForm = (props) => {
    const history = useHistory();
    const {_id} = useParams();
    const [form, setForm] = useState({
        title: '',
        price: '',
        description: ''
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
          .then(res => setForm(res.data.results))
          .catch(err => console.log(err))
    },[_id])

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value 
        });
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/api/products/update/${_id}`, form)
            .then(res => {
                console.log(res.data)
                history.push('/');
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Update {form.title}</h1>
            <form onSubmit={onSubmitHandler}>
                <input type='text' name='title' placeholder='product name' value={form.title} onChange={onChangeHandler} /><br />
                <input type='number' name='price' placeholder='price' value={form.price} onChange={onChangeHandler} /><br/>
                <input type='text'name='description' placeholder='description' value={form.description} onChange={onChangeHandler} /> <br/>
                <input type='submit' />
            </form>
        </div>
    )
}

export default UpdateForm;