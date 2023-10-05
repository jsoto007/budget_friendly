'use client'
import { UserContext } from './context/UserContextProvider'
import { useContext, useState } from 'react'

function Dashboard() {

  const {currentUser} = useContext(UserContext)



  return(
    <div>
      Welcome Home {currentUser}!
    </div>
  )
}

export default Dashboard;