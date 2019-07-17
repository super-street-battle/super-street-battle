import React, {useState, useEffect} from 'react'
import Logo from '../../components/logo'
import './login.css'

const Login = _ => {

  useEffect(_ => {
    setTimeout(() => {
      document.getElementById('loginbtn').style.visibility = 'visible'
    }, 2700)
  },[])

  return (
    <div className='loginpage'>
      <Logo />
      <div className='btndiv'>
        <button id="loginbtn" onClick={_=> {
          localStorage.setItem('userId', 1)
          window.location.reload()
        }}>
            Login
        </button>
      </div>
    </div>
  )
}

 export default Login 