import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

const Update = (props) => {
    const history = useHistory();
    const {_id} = useParams();
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
          .then(res => setName(res.data.results))
          .catch(err => console.log(err))
    },[_id])

    const onChangeHandler = (event) => {
        setName({
            [event.target.name]: event.target.value 
        });
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/api/authors/update/${_id}`, name)
            .then(res => {
                console.log(res.data)

                if(res.data.results){
                    history.push('/');
                }
                else{
                    setErrors(res.data.error.errors);
                }
            })
            .catch(err => console.log(err))
    }

    return(
        <div className='App' >
            <Link to='/' className='btn btn-outline-dark mt-2'>Home</Link>
            <div className='border border-dark'>
                <h3 className='mt-4'>Edit Author</h3>
                <form onSubmit={onSubmitHandler}>
                    <input type='text' name='name' placeholder='Author Name' className='formAuthName' value={name.name} onChange={onChangeHandler}></input><br/>
                    <span>{errors.name && errors.name.message}</span><br/>
                    <input type='submit' className='btn btn-outline-dark'></input>
                </form>
            </div>
        </div>
    )
}

export default Update;