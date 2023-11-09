import React, { useState, useEffect, useContext } from "react"
import AuthConteiner from "./AuthConteiner"
import Dashboard from "./Dashboard"
import { UserContext } from "../context/UserContextProvider";
import NavBar from "./NavBar";
import { Route, Routes } from 'react-router-dom';

export default function App() {

  const userLogedIn = window.localStorage.getItem("isLoggedIn");

  if (userLogedIn === null) return <AuthConteiner />

  
  return (
    <div className="bg-[#0F4880]">
      <NavBar />

      <Routes>
        <Route path="/" element={<h1>Hello from home</h1>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/profile" element={<h1>Profile</h1>}/>
        <Route path="/expenses" element={<h1>expenses</h1>}/>
      </Routes>
        
    </div>
  )
}
