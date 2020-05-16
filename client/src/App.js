import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Todos from './Components/Todos';
import Admin from './Components/admin';
import PrivateRoute from './hocs/PrivateRoute';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './Components/Register';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import MainCalendar from './Components/MainCalendar';
function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/" exact component={Home}/>
      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Register}/>

      <PrivateRoute path="/todos" roles={["user","admin"]} component={MainCalendar}/>
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
    </Router>
  );
}

export default App;
