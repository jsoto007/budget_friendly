'use client'
import { UserContext } from './context/UserContextProvider'
import { useContext, useState } from 'react'

function Home() {

  const {currentUser} = useContext(UserContext)



  return(
    <div>
      Welcome Home {currentUser}!
    </div>
  )
}

export default Home;