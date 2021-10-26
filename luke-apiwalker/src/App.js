import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Planet from './views/Planet';
import People from './views/People';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchForm />
        <Switch>
          <Route exact path='/planet/:id'>
            <Planet />
          </Route>

          <Route exact path='/people/:id'>
            <People />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
