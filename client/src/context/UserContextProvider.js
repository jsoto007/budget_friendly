import React from 'react';
import {useEffect, useState} from 'react';


const UserContext = React.createContext();

function UserContextProvider({ children } ) {

  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch('http://127.0.0.1:5555/check_session')
    .then(resp => {
      if (resp.ok){
        resp.json().then(user => {
          setCurrentUser(user)
          window.localStorage.setItem("isLoggedIn", true)
        })
      }
    })
  }, [])


  function handleReload() {
    setTimeout(function(){
      window.location.reload();
  }, 100);
  }

  function handleLogout() {
    fetch("http://127.0.0.1:5555/logout", {
      method: 'DELETE', 
    })
    .then(()=> {
      setCurrentUser({})
      localStorage.removeItem("isLoggedIn")
      handleReload()
  })
  }



  return (
    <UserContext.Provider value={{
      currentUser,
      setCurrentUser,
      handleLogout
    }}>
        { children }
    </UserContext.Provider>
  )

}

export { UserContext, UserContextProvider};