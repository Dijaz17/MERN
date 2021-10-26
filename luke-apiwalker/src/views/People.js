import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import '../App.css'

const People = (props) => {
    const {id} = useParams();
    const [person, setPerson] = useState([]);

    useEffect(()=>{
        axios.get("https://swapi.dev/api/people/"+id)
            .then(res => {
                console.log(res.data);
                setPerson(res.data);
            })
            .catch(err => console.log(err));
    },[id])


    return(
        <div className='App'>
            <h1>{person.name}</h1>
            <ul>
                <li><b>Height:</b> {person.height}</li>
                <li><b>Mass:</b> {person.mass}</li>
                <li><b>Hair Color:</b> {person.hair_color}</li>
                <li><b>Skin Color:</b> {person.skin_color}</li>
            </ul>
        </div>
    )
}

export default People;