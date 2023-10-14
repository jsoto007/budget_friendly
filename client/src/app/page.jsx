'use client'

import Signup from "./components/Signup"
import Login from './components/Login'
import { UserContext } from './context/UserContextProvider'
import { useContext, useState } from 'react'
import Auth from "./components/Auth"

import { useSession } from "next/session";

export default function Home() {

  const { user } = useSession();

  if (!user) return <Auth />

  return (
    <div>
      Hellor from Home
    </div>
  )
}
