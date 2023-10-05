'use client'
import Signup from "./components/Signup"
import Login from './components/Login'
import { UserContext } from './context/UserContextProvider'
import { useContext, useState } from 'react'

export default function Home() {

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
