import React, {useState, useEffect} from 'react'
import Logo from '../../components/logo'
import './login.css'
import FireBaseLogin from '../../components/firebaselogin'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3)
    
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1)
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));


const Login = props => {

  const classes = useStyles();


  useEffect(_ => {
    setTimeout(() => {
      document.getElementById('loginbtn').style.visibility = 'visible'
    }, 2700)
  },[])

  return (

    
    <div className='main_container'>
      <Container>
     
        <Logo />
      
     
        <div>
        <button id="loginbtn" onClick={_=> {
          localStorage.setItem('userId', 1)
          window.location.reload()
        }}>
           Sarika Button
        </button>
</div>

        <FireBaseLogin FirebaseAuth={props.FirebaseAuth} uiConfig={props.uiConfig}/>

        </Container>

    </div>
  )
}

 export default Login 