import React, {useState, useEffect} from 'react'
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
import CarSelect from './pages/carSelect/carSel'
import Player from './utils/player'

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
  const [loginState, setLoginState] = useState({
    isLoggedIn: 1,
    newUser: 'new',
    uid: ''
  })
  
  useEffect(_ => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        Player.checkuid({ uid: user.uid })
          .then(({ data }) => {
            if (data === 'no user') {
              setLoginState({ ...loginState, newUser: 'new', uid: user.uid })
            } else {
              setLoginState({ ...loginState, newUser: 'old' })
              localStorage.setItem('_id', data)
            }
          })
          .catch(e => console.log(e))
        setLoginState({ ...loginState, isLoggedIn: 1 })
      } else {
        setLoginState({...loginState, isLoggedIn: 2})
      }
    })
  }, [])
 


  if (loginState.isLoggedIn === 1 && loginState.newUser === 'old') {
    return (
      <div className="App">
        <Nav FirebaseAuth={FBAuth} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Race" component={Race} />
          <Route path="/Garage" component={Garage} />
          <Route path="/Junkyard" component={Junkyard} />
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
          <Route path="/login/newUser" component={_ => <CarSelect handleAddUser={loginState.handleAddUser} uid={loginState.uid}/>} />
          <Route path="/Login" component={() => <Login FirebaseAuth={FBAuth} uiConfig={uiConfig} />} />
          <Redirect to="/login" />
        </Switch>
      </div>
    )
  } else {
    return (
      <div className='App'>
      </div>
    )
  }

}
export default App