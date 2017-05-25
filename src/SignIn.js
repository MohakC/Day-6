import React from 'react'
import { auth, githubProvider } from './base'
import './SignIn.css'

const SignIn = (props) => {
  const authenticate = (provider) => {
    auth
      .signInWithPopup(provider)
      .then(props.authHandler)
  }
  return (
    <button 
      className="SignIn" 
      onClick={() => authenticate(githubProvider)}
    >
      Sign In With Github
    </button>  
  )
}

export default SignIn