import Index from 'pages';
import NegritoInfoPage from 'pages';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'styles/styles.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/negrito'>
            <NegritoInfoPage />
          </Route>
          <Route path='/'>
            <Index />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
