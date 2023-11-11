import React, { useState, useEffect } from "react";

const DataContext = React.createContext();

function DataContextProvider( { children }) {

  const [userData, setUserData] = useState({})


  useEffect(() => {
    fetch('/users')
    .then(resp => {
      if (resp.ok){
        resp.json().then(dataForUser => {
          setUserData(dataForUser)
        })
      }
    })
  }, [])

  return (
    <DataContext.Provider value={{
      userData,
      setUserData,
    }}>
      { children }
    </DataContext.Provider>
  )
}

export { DataContext, DataContextProvider};