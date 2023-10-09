'use client'

import Signup from "./components/Signup"
import Login from './components/Login'
import { UserContext } from './context/UserContextProvider'
import { useContext, useState } from 'react'
import Auth from "./components/Auth"

export default function Home() {


  if (userLogedIn === null) return <Auth />

  return (
    <div>
      Hellor from Home
    </div>
  )
}
