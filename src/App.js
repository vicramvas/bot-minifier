
import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { VirtualAssistant } from './Components/VirtualHelper/VirtualAssistant';
import { NavArea } from './Components/NavArea';
import { SideBar } from './Components/SideBar';

function App() {
  return (
    <div className="App">
      <div className="container-fluid" style={{ paddingTop: 20 }}>
        <section className="row">
          <NavArea />
        </section>
        <section className="row">
          <article className="col-2">
            <SideBar />
          </article>
          <article className="col-10">
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/virtual-assistant' component={VirtualAssistant} />
            </Switch>
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
