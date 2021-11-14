import axios from 'axios';
import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';

const Create = (props) => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});


    const onChangeHandler = (event) => {
        setName({
            [event.target.name]: event.target.value 
        });
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/api/authors/new', name)
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
                <h3 className='mt-4'>Add a New Author</h3>
                <form onSubmit={onSubmitHandler}>
                    <input type='text' name='name' placeholder='Author Name' className='formAuthName' onChange={onChangeHandler}></input><br/>
                    <span>{errors.name && errors.name.message}</span><br/>
                    <input type='submit' className='btn btn-outline-dark'></input>
                </form>
            </div>
        </div>
    )
}

export default Create;