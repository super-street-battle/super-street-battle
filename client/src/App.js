import React, {useState} from 'react'
import Nav from './components/nav'
import './App.css'
import './CSS_Reset.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/home'
import Challenge from './pages/challenge'
import Garage from './pages/garage'
import Login from './pages/login'

const App = _ => {
  const [gameState, setGameState] = useState({})
    if (localStorage.getItem('userId')) {
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
    } else {
      return (
        <div>
         <Switch>
            <Route exact path="/Login" component={ () => <Login /> }/>
            <Redirect to="/Login" />
          </Switch>
      </div>
      )
    }
  
  // return (
  //   <div className="App">
  //     <Nav />
  //     <Switch>
  //       <Route exact path="/" component={Home}/>
  //       <Route path="/Challenge" component={Challenge} />
  //       <Route path="/Garage" component={Garage} />
  //       <Route path="/Login" component={Login} />
  //       <Redirect to="/" />
  //     </Switch>
  //   </div>
  // )
}

export default App