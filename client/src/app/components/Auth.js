'use client'
import Signup from './Signup'
import Login from './Login'
import { useState } from 'react'

export default function Auth() {

  const [isLogin, setIsLogin] = useState(true)

  function changeLogintoSignup() {
    setIsLogin((isLogin) => !isLogin)
  }

  return (
    <div> 
      {isLogin? (<Login onChangeLogin={changeLogintoSignup} />):(<Signup onChangeLogin={changeLogintoSignup} />)}
    </div>
  )
}