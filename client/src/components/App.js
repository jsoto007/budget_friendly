import React, { useState, useEffect } from "react"
import AuthConteiner from "./AuthConteiner"
import Dashboard from "./Dashboard"

export default function App() {

  const [user, setUser] = useState(false)


  useEffect(() => {
    fetch('http://127.0.0.1:5555/users')
    .then(resp => {
      if (resp.ok){
        resp.json().then(data => {
          setUser(true)
        })
      }
    })
  }, [])

  function handleLogout() {
    fetch("http://127.0.0.1:5555/logout", {
      method: 'DELETE', 
    })
    .then(()=> {
      setUser(false)
  })
  }

  if (!user) return <AuthConteiner />

  return (
    <div className="bg-[#0F4880]">
      <button onClick={handleLogout}>Logout</button>
      <Dashboard />
    </div>
  )
}
