import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import  Register  from './screens/Register';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/> 

      </Switch>
    </Router>
    // <Home/>
  );
}

export default App;
