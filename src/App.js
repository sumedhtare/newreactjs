import React from 'react';
import logo from './logo.svg';
import FirstPage from './component/firstpage'
import SecondPage from './component/secondpage'
import Topics from './component/topics'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link exact to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <SecondPage />
        </Route>
        <Route path="/topics">
            <Topics/>
          </Route>
        <Route path="/">
          <FirstPage />
        </Route>
        
      </Switch>
    </div>
  </Router>
  );
}

export default App;
