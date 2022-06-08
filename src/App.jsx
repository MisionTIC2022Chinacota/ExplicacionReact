import Index from 'pages';
import NegritoInfoPage from 'pages';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'styles/styles.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/negrito'>
            <NegritoInfoPage />
          </Route>
          <Route path='/'>
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
