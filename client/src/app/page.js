'use client'
import { useContext, useState } from 'react'
import Signup from "./components/Signup"
import Login from './components/Login'
import { UserContext } from './context/UserContextProvider'

export default function Home() {

  const [isLogin, setIsLogin] = useState(true)

  const {currentUser} = useContext(UserContext)
  console.log("this is current User", currentUser)
  function changeLogintoSignup() {
    setIsLogin((isLogin) => !isLogin)
  }

  return (
    <div> 
      {isLogin? (<Login onChangeLogin={changeLogintoSignup} />):(<Signup onChangeLogin={changeLogintoSignup} />)}
    </div>
  )
}
