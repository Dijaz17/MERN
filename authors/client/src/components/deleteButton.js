import axios from 'axios';

const DeleteButton = (props) => {
    const _id = props._id;

    const onClickHandler = (event) => {
        console.log(_id);

        axios.delete(`http://localhost:8000/api/authors/delete/${_id}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
        
    }

    return <button onClick={onClickHandler} className='btn btn-outline-dark'>Delete Product</button>
}

export default DeleteButton;