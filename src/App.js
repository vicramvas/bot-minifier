
import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import {VirtualAssistant} from './Components/VirtualHelper/VirtualAssistant'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import NavMenu from './NavMenu';
import { SideBar } from './Components/SideBar';

function App() {
  return (
    <div className="App">
       <div className="container-fluid" style={{paddingTop: 20}}>
        <div className='row'>
          <div className="col-2">
              <SideBar/>
          </div>
          <div className="col-10">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/virtual-assistant' component={VirtualAssistant} />

              </Switch>
          </div>
        </div>
    </div>
    </div>
  );
}

export default App;
