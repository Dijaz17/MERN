import axios from 'axios';
import { useHistory } from 'react-router-dom';

const DeleteButton = (props) => {
    const _id = props._id;
    const history = useHistory();

    const onClickHandler = (event) => {
        console.log(_id);

        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
            .then(res => {
                console.log(res);
                history.push('/');
            })
            .catch(err => console.log(err))
        
    }

    return <button onClick={onClickHandler} className='dltButton'>Delete Product</button>
}

export default DeleteButton;