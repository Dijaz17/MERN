import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from '../components/form'
import {Link} from 'react-router-dom';
import DeleteButton from '../components/deleteButton';

const Main = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
          .then(res => setProducts(res.data.results))
          .catch(err => console.log(err))
    },[products])

    
    return(
        <div>
            <h1>Product Manager</h1>
            <h2>Create Product</h2>
            <Form />
            <hr />
            <h1>Products</h1>
            {
                products.map((item, i) => {
                    return <div key={i}>
                        <Link to={`/${item._id}`} className='linkSingle' >{item.title}</Link>
                        <DeleteButton _id={item._id}/>
                    </div>
                })
            }
        </div>
    )
}

export default Main;