import React, {Component} from 'react';
import { BrowserRouter,  Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
//import SignedInLinks from './components/layout/SignedInLinks'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import Signin from './components/auth/Signin'


class App extends Component{
  render (){
    return (
      <BrowserRouter>
      <div className="App">
         <Navbar />
         <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/projects/:id' component={ProjectDetails}/>
          <Route path='/sign in' component={Signin}/>
         </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
