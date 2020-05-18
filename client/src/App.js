import React from 'react';
import Signin from './components/IndexPage/Register/Signin';
import Signup from './components/IndexPage/Register/Signup';

//import UserProfile from './components/IndexPage/UserProfile.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component {

render (){
    return (
      <Router>
      <div className="App">

      <Route path="/Signin" component={Signin} />

      </div>
      </Router>
           ); 

         }
}


export default App;