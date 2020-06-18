import React from 'react';
import './App.css';
import HomePage from './pages/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatPage = () => (
  <div>
    <h1>Hat Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
