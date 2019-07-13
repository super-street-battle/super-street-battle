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
    <>
      <Logo />
      <div className='btndiv'>
        <button id="loginbtn">Login</button>
      </div>
    </>
  )
}

 export default Login 