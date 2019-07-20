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
import firebase from 'firebase/auth';
import Loader from './components/loading'



// Configure Firebase.
var firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
    authDomain: "super-street-battle.firebaseapp.com",
    databaseURL: "https://super-street-battle.firebaseio.com",
    projectId: "super-street-battle",
    storageBucket: "",
    messagingSenderId: "629360248969",
    appId: "1:629360248969:web:6191598f1e8b236c"
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
  const [isLoggedIn, setLoginState] = useState(0)
 



  useEffect(_ => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLoginState(1)
        console.log(user)
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
            <Route exact path="/" component={Home}/>
            <Route path="/Race" component={Race} />
            <Route path="/Garage" component={Garage} />
            <Route path="/Junkyard" component={Junkyard} />
            <Redirect to="/" />
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