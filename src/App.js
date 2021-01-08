import React, { Component } from 'react'
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom'
import VendingMachine from './VendingMachine'
import Eggs from './Eggs'
import Sushi from './Sushi'
import Veggies from './Veggies'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <NavLink exact activeClassName="active-link" to="/" className="links">Home</NavLink>
          <NavLink exact activeClassName="active-link" to="/Eggs" className="links">Eggs</NavLink>
          <NavLink exact activeClassName="active-link" to="/Sushi" className="links">Sushi</NavLink>
          <NavLink exact activeClassName="active-link" to="/Veggies" className="links">Veggies</NavLink>
        </nav>

        <Switch>
          <Route exact path='/' component={VendingMachine} />
          <Route exact path='/Eggs' component={Eggs} />
          <Route exact path='/Sushi' component={Sushi} />
          <Route exact path='/Veggies' component={Veggies} />
        </Switch>
      </div>
    )

  }
}

export default App;
