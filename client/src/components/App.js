import React, { useState, useEffect } from "react"
import AuthConteiner from "./AuthConteiner"

export default function App() {

  const [user, setUser] = useState(false)


  useEffect(() => {
    fetch('/check_session')
    .then(resp => {
      if (resp.ok){
        resp.json().then(user => {
          setUser(user)
        })
      }
    })
  }, [])

  if (!user) return <AuthConteiner />

  return (
    <div className="bd-red-700">
      Hello from Home!
    </div>
  )
}
