import React, {useState, useEffect} from 'react'
import Logo from '../../components/logo'
import './login.css'
import FireBaseLogin from '../../components/firebaselogin'
import Container from '@material-ui/core/Container'

const Login = _ => {

  useEffect(_ => {
    setTimeout(() => {
      document.getElementById('loginbtn').style.visibility = 'visible'
    }, 2700)
  },[])

  return (

    
    <div className='loginpage'>
      <Container maxWidth="sm">
      <Logo />
      <div className='btndiv'>
        <button id="loginbtn" onClick={_=> {
          localStorage.setItem('userId', 1)
          window.location.reload()
        }}>
           Sarika Button
        </button>


        <FireBaseLogin />
      </div>

        </Container>

    </div>
  )
}

 export default Login 