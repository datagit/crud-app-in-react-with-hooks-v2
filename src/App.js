// React Hooks State
import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
import './App.css';
// We will create these two pages in a moment
import Examples from "./components/Examples";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import DemoCrud from "./components/DemoCrud";
import SearchResults from "./components/SearchResults";
import SearchResults2 from "./components/SearchResults2";

function App() {
  return (
      <Router>
          <div className='container'>
              <Switch>
                  <Route exact path='/' component={DemoCrud}/>
                  <Route path='/example/:id' component={Examples}/>
                  <Route path='/count' component={Counter}/>
                  <Route path='/count2' component={Counter2}/>
                  <Route path='/search-result' component={SearchResults}/>
                  <Route path='/search-result-2' component={SearchResults2}/>
              </Switch>
              <hr />
              <h1>MENU</h1>
              <ul>
                  <li>
                      <Link to="/example/100" className='button'>Simple React Hooks + receive params from URL</Link>
                  </li>
                  <li>
                      <Link to="/" className='button'>CRUD App with Hooks</Link>
                  </li>
                  <li>
                      <Link to="/count" className='button'>Counter + update title from custom Hooks</Link>
                  </li>
                  <li>
                      <Link to="/count2" className='button'>Counter2 + update title from custom Hooks</Link>
                  </li>
                  <li>
                      <Link to="/search-result" className='button'>SearchResults + change event + call asyn api</Link>
                  </li>
                  <li>
                      <Link to="/search-result-2" className='button'>SearchResults2 + click event + call asyn api from custom Hooks</Link>
                  </li>
              </ul>
          </div>
      </Router>
  );
}
export default App;
