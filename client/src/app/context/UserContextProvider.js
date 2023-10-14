'use client'

import React from 'react';
import {useEffect, useState} from 'react';


const UserContext = React.createContext();

function UserContextProvider({ children } ) {

  const [currentUser, setCurrentUser] = useState({})

  const testUser = {name: "test"}

  useEffect(() => {
    fetch('/check_session')
    .then(resp => {
      if (resp.ok){
        resp.json().then(user => {
          setCurrentUser(testUser)
        })
      }
    })
  }, [])

  console.log("currentUser:",currentUser)

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