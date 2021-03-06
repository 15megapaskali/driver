import React from 'react';
import './App.css';
import Home from './components/Home';

import {HashRouter,Route,Link,Switch,NavLink} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
