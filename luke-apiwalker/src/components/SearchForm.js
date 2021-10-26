import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const SearchForm = (props) => {
    const history = useHistory();
    const [resource, setResource] = useState('people');
    const [idNum, setIdNum] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();

        history.push(`/${resource}/${idNum}`);
    }

    return(
        <div>
          <h1>Search!</h1>
          <form onSubmit={onSubmitHandler}>
              <select onChange={(event) => setResource(event.target.value)}>
                  <option value="people">People</option>
                  <option value="planet">Planets</option>
              </select>
              <input type='number' onChange={(event) => setIdNum(event.target.value)} />
              <input type='submit' />
          </form>
        </div>
    )
}

export default SearchForm;