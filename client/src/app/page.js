'use client'
import { useState } from 'react'
import Login from './components/login'
import Signup from "./components/Signup"

export default function Home() {

  const [isLogin, setIsLogin] = useState(true)

  function changeLogintoSignup() {
    setIsLogin((isLogin) => !isLogin)
    console.log(isLogin)
  }

  return (
    <div> 
      <button onClick={changeLogintoSignup}>ClickMe</button>
      {isLogin? (<Login onChangeLogin={changeLogintoSignup} />):(<Signup onChangeLogin={changeLogintoSignup} />)}
    </div>
  )
}
