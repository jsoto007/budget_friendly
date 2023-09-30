'use client'
import React from 'react';
import {useEffect, useState} from 'react'

const UserContext = React.createContext();

function UserContextProvider({ children } ) {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(()=> {
    fetch('/check_session')
    .then((resp)=> resp.json)
    .then((resp)=>(console.log(resp)))
  },[])

  return (
    <UserContext.Provider value={{
      currentUser,
      setCurrentUser
    }}>
        { children }
    </UserContext.Provider>
  )

}

export { UserContext, UserContextProvider};