import React from 'react'
import Nav from './components/nav'
import './App.css'
import './CSS_Reset.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/home'
import Challenge from './pages/challenge'
import Garage from './pages/garage'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Challenge" component={Challenge} />
        <Route path="/Garage" component={Garage} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App