import React from 'react';
import Signin from './components/IndexPage/Register/Signin';
import Signup from './components/IndexPage/Register/Signup';
import Home from './components/IndexPage/Home/Home';
import ConsultasGrupo from './components/Consultas/ConsultasGrupo';

//import UserProfile from './components/IndexPage/UserProfile.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component {

render (){
    return (
      
      <Router>

        <Switch>

        <Route exact path="/" component={Home} />
      
        <Route exact path="/Signup" component={Signup} />
      
        <Route exact path="/Signin" component={Signin} />

        <Route exact path="/Consulta" component={ConsultasGrupo} />

        </Switch>

      </Router>
           ); 

         }
}


export default App;