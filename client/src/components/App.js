import React, { useState, useEffect, useContext } from "react"
import AuthConteiner from "./AuthConteiner"
import Dashboard from "./Dashboard"
import { UserContext } from "../context/UserContextProvider";
import NavBar from "./NavBar";

export default function App() {


  const userLogedIn = window.localStorage.getItem("isLoggedIn");

  if (userLogedIn === null) return <AuthConteiner />


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

      localStorage.removeItem("isLoggedIn")
      handleReload()
  })
  }

  return (
    <div className="bg-[#0F4880]">
      <button onClick={handleLogout}>Logout</button>
      <NavBar />
      <Dashboard />
    </div>
  )
}
