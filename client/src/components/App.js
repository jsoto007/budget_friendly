import React from "react"
import { Route, Routes, useContext } from 'react-router-dom';
import AuthConteiner from "./AuthConteiner"
import Dashboard from "./Dashboard"
import NavBar from "./NavBar";
import Profile from "./Profile"
import { DataContextProvider } from "../context/DataContextProvider";
import { UserContextProvider } from "../context/UserContextProvider";

export default function App() {

  const userLogedIn = window.localStorage.getItem("isLoggedIn");

  if (userLogedIn === null) return <AuthConteiner />

  return (
      <div className="bg-[#0F4880]">
        <NavBar />

        <Routes>
          <Route path="/" element={<h1>Hello from home</h1>}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/expenses" element={<h1>expenses</h1>}/>
        </Routes>
          
      </div>
  )
}
