import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from '../components/deleteButton';

const Main = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allAuthors')
          .then(res => setAuthors(res.data.results))
          .catch(err => console.log(err))
    },[authors])
    
    return(
        <div>
            <Link to={'/createNew'} className='btn btn-outline-dark'>Add an Author</Link>
            <div className='d-flex'>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'><b>Author</b></li>
                        {
                            authors.map((item, i) => {
                                return <li key={i} className='list-group-item nameSz'>{item.name}</li>
                            })
                        }
                    </ul>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'><b>Actions Available</b></li>
                        {
                            authors.map((item, i) => {
                                return (
                                    <li key={i} className='list-group-item'>
                                        <Link to={`/edit/${item._id}`} className='btn btn-outline-dark'>Edit</Link>
                                        <DeleteButton _id={item._id}></DeleteButton>
                                    </li>
                                )})
                        }
                    </ul>
            </div> 
        </div>   
    )
}

export default Main;