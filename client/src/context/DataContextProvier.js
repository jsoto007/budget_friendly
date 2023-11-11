import React, {useEffect, useState} from 'react';


const DataContext = React.createContext();

function DataContextProvider( { children } ) {

  const [userData, setUserData] = useState({})

  const dataSet = {
    "_password_hash": "$2b$12$QD6J6NFLaadfRKhRKew.7uEqsXt1m5drylZdzGTXookwFjMD8u3/W",
    "email": "testpostman@gmail.com",
    "id": 2,
    "name": "Post Man"
    }


  useEffect(() => {
    fetch('/users')
    .then(resp => {
      if (resp.ok){
        resp.json().then(dataForUser => {
          setUserData(dataSet)
        })
      }
    })
  }, [])




  return (
    <DataContext.Provider value={{
      userData,
      setUserData
    }}>
        { children }
    </DataContext.Provider>
  )

}

export { DataContext, DataContextProvider};