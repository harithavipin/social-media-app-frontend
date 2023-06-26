import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true)
const [confirmPass, setconfirmPass] = useState(true)

  return (
    <div className='Auth'>
      {/* Left side */}
      <div className='authleft'>
        <img src={Logo} alt=''></img>
        <div className='auth-head'>
          <h1>Helloo Media</h1>
          <span>Explore the ideas throughout the world</span>
        </div>
      </div>
      {/* Right side */}
      <div className='formright'>
        <form className='infoForm authform' >
          <h1>
            {
              isSignUp ? "Sign up" : "Login"
            }</h1>

          {isSignUp &&
            <div>
              <input
                type='text'
                placeholder='First Name'
                className='inputname'
                name='firstname'
                 />

              <input
                type='text'
                placeholder='Last Name'
                className='inputname'
                name='lastname'
                 />
            </div>
          }
          <div>
            <input
              type='text'
              placeholder='Username'
              className='inputname'
              name='username'
               /></div>
          <div>
            <input
              type='password'
              placeholder='Password'
              className='inputname'
              name='password'
               />

            {isSignUp &&
              <input type='password'
                placeholder='Confirm Password'
                className='inputname'
                name='confirmpass'
                 />
            }

          </div>
          <span
            style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px" }}>
            * Confirm password is not same</span>
          <div>
            <span
              style={{ fontSize: '13px', cursor: "pointer" }}
              onClick={() => { setIsSignUp((prev) => !prev);
               }}>
              {
                isSignUp ?
                  "Already have an account?Login!" :
                  "Don't have an account? Sign up"
              }

            </span>
          </div>
          <button className='button signupbtn' type='submit'>
            {
               isSignUp ? "SignUp" : "Login"
            }
          </button>

        </form>
      </div>
    </div>
  )
}
export default Auth