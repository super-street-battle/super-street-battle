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
import Loader from './components/loading'
import CarSelect from './pages/carSelect/carSel'



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

  const [gameState, setGameState] = useState({})
  const [isLoggedIn, setLoginState] = useState(1)
  const [newUser, setUserState] = useState("old")


  useEffect(_ => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLoginState(1)
      } else {
        setLoginState(2)     
      }
    })
  }, [])

    if (isLoggedIn === 1) {
      return (
        <div className="App">
        
        <Nav FirebaseAuth={FBAuth}/>
          <Switch>
            <Route exact path="/" component={_ => newUser === 'new' ? <CarSelect /> : <Race />}/>
            <Route path="/Race" component={Race} />
            <Route path="/Garage" component={Garage} />
            <Route path="/Junkyard" component={Junkyard} />
             <Route path="/SelectCar" component={CarSelect} />

          </Switch>
        </div>
        )
    } else if (isLoggedIn === 2) {
      return (
        <div>
         <Switch>
            <Route exact path="/Login" component={ () => <Login FirebaseAuth={FBAuth} uiConfig={uiConfig}/> }/>
            <Redirect to="/Login" />
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