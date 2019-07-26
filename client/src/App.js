import React, { useState, useEffect } from 'react'
import Nav from './components/nav'
import './App.css'
import './CSS_Reset.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/home'
import Race from './pages/race'
import Garage from './pages/garage'
import Login from './pages/login'
import Junkyard from './pages/junkyard'
import firebase from 'firebase';
import Loader from './components/loading'
import CarSelect from './pages/carSelect/carSel'
import Player from './utils/player'
import axios from 'axios'



// Configure Firebase.
var firebaseConfig = {
  apiKey: "AIzaSyAG9WRxHHx9fVwHL287lMPRY3y4t7MZkVw",
  authDomain: "todo-334b1.firebaseapp.com",
  databaseURL: "https://todo-334b1.firebaseio.com",
  projectId: "todo-334b1",
  storageBucket: "todo-334b1.appspot.com",
  messagingSenderId: "595507004361",
  appId: "1:595507004361:web:5ddc164fdcc824a0"
};
firebase.initializeApp(firebaseConfig);
// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};
const FBAuth = firebase.auth()
const App = _ => {
  // const [isLoggedIn, setLoginState] = useState(1)
  // const [newUser, setUserState] = useState("new")
  const [loginState, setLoginState] = useState({
    isLoggedIn: 1,
    newUser: 'new'
  })
  useEffect(_ => {
    firebase.auth().onAuthStateChanged(user => {
      //handleAddUser()
      if (user) {
        Player.checkuid({ uid: user.uid })
          .then(({ data }) => {
            if (data === 'no user') {
              setLoginState({ ...loginState, newUser: 'new' })
            } else {
              setLoginState({ ...loginState, newUser: 'old' })
              localStorage.setItem('_id', data)
            }
          })
          .catch(e => console.log(e))

        setLoginState({ ...loginState, isLoggedIn: 1 })
      } else {
        setLoginState({ ...loginState, isLoggedIn: 2 })
      }
    })
  }, [])


  loginState.handleAddUser = event => {

    console.log(event.target)
    console.log(event.target.id)



    const carID = event.target.id


    axios.post('/players', { uid: FBAuth.currentUser.uid })
      .then(r => {
        Player.checkuid({ uid: FBAuth.currentUser.uid })
          .then(({ data }) => {
            setLoginState({ ...loginState, newUser: 'old' })
            localStorage.setItem('_id', data)
          })
          .catch(e => console.log(e))

        //   axios.post('/cars', {
        //     carName: cars[carID].name,
        //        uid: FBAuth.currentUser.uid,
        //        imageLink: cars[carID].stock,
        //        animation:  cars[carID].animation,
        //        selling: false
        //   })
        // .then(r => console.log('Data Added'))
        // .catch(e => console.log(e))


      })
      .catch(e => console.log(e))

  }


  if (loginState.isLoggedIn === 1 && loginState.newUser === 'old') {
    return (
      <div className="App">
        <Nav FirebaseAuth={FBAuth} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Race" component={Race} />
          <Route path="/Garage" component={Garage} />
          <Route path="/Junkyard" component={Junkyard} />
          {/* <Route path="/SelectCar" component={() => <CarSelect handleAddUser={loginState.handleAddUser} />} /> */}
          <Redirect to="/" />
        </Switch>
      </div>
    )
  } else if (loginState.isLoggedIn === 2) {
    return (
      <div>
        <Switch>
          <Route exact path="/Login" component={() => <Login FirebaseAuth={FBAuth} uiConfig={uiConfig} />} />
          <Redirect to="/Login" />
        </Switch>
      </div>
    )
  } else if (loginState.isLoggedIn === 1 && loginState.newUser === 'new') {
    return (
      <div>
        <Switch>
          <Route path="/login/newUser" component={_ => <CarSelect handleAddUser={loginState.handleAddUser} />} />
          {/* <Route path="/login/newUser" component={_ => <CarSelect />} /> */}
          <Route path="/Login" component={() => <Login FirebaseAuth={FBAuth} uiConfig={uiConfig} />} />
          <Redirect to="/login/newUser" />
        </Switch>
      </div>
    )
  } else {
    return (
      <div className='App'>
        {/* <Loader /> */}
      </div>
    )
  }

}
export default App