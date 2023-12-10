import React from "react"
import { Route, Routes, useContext } from 'react-router-dom';
import AuthConteiner from "./AuthConteiner"
import Dashboard from "./Dashboard"
import NavBar from "./NavBar";
import ProfileContainer from "./profile/ProfileContainer";
import IndividualData from "./profile/IndicidualData";

export default function App() {

  const userLogedIn = window.localStorage.getItem("isLoggedIn");

  if (userLogedIn === null) return <AuthConteiner />

  return (
      <div className="bg-[#0F4880]">
        <NavBar />

        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/profile" element={<ProfileContainer />}/>
          <Route path="/expenses" element={<h1>expenses</h1>}/>
          <Route path="/profile/security" element={<IndividualData />}/>
          <Route path="/profile/analytics" element={<h1>Hello from User</h1>}/>
        </Routes>
          
      </div>
  )
}
