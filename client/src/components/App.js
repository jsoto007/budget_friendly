import React, { useState, useEffect, useContext } from "react"
import AuthConteiner from "./AuthConteiner"
import Dashboard from "./Dashboard"
import { UserContext } from "../context/UserContextProvider";
import NavBar from "./NavBar";

export default function App() {


  const userLogedIn = window.localStorage.getItem("isLoggedIn");

  if (userLogedIn === null) return <AuthConteiner />

  return (
    <div className="bg-[#0F4880]">
      <NavBar />
      <Dashboard />
    </div>
  )
}
