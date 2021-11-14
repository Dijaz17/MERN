import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Favorite Authors</h1>

        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>

          <Route exact path='/createNew'>
            <Create />
          </Route>

          <Route exact path='/edit/:_id'>
            <Update />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
