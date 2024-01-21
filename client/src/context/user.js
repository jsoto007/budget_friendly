import React from 'react';
import { useState, useEffect } from 'react';

const UserContext = React.createContext();

function UserProvider ({ children } ) {

  const [user, setUser] = useState([])

  useEffect(() => {
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])


  return (
    <UserContext.Provider value={{user, setUser}}>
        { children }
    </UserContext.Provider>
  )

}

export { UserContext, UserProvider};