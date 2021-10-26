import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import '../App.css'

const People = (props) => {
    const {id} = useParams();
    const [planet, setPlanet] = useState([]);

    useEffect(()=>{
        axios.get("https://swapi.dev/api/planets/"+id)
            .then(res => {
                console.log(res.data);
                setPlanet(res.data);
            })
            .catch(err => console.log(err));
    },[id])


    return(
        <div className='App'>
            <h1>{planet.name}</h1>
            <ul>
                <li><b>Climate:</b> {planet.climate}</li>
                <li><b>Terrain:</b> {planet.terrain}</li>
                <li><b>Surface Water:</b> {planet.surface_water}</li>
                <li><b>Population:</b> {planet.population}</li>
            </ul>
        </div>
    )
}

export default People;