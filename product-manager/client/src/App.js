import './App.css';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './views/main';
import SingleProduct from './views/singleProduct';
import UpdateForm from './views/updateProduct';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>

        <Route exact path='/:_id'>
          <SingleProduct />
        </Route>

        <Route exact path='/:_id/edit'>
          <UpdateForm />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
  )
}

export default App;
