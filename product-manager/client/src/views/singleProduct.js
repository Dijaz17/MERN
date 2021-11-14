import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DeleteButton from '../components/deleteButton';

const SingleProduct = (props) => {
    const {_id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
              setProduct(res.data.results);
              console.log(res.data.results)
            })
            .catch(err => console.log(err))
    },[_id])

    
    return(
        <div>
           <h1>{product.title}</h1>
           <p>Price: ${product.price}</p>
           <p>Description: {product.description}</p>
           <Link to={`/${product._id}/edit`} className='linkSingle' >Edit Product</Link><br/>
           <DeleteButton _id={product._id}/>
        </div>
    )
}

export default SingleProduct;