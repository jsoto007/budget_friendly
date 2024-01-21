import { Route, Routes } from 'react-router-dom';
import Dashboard from "./Dashboard"
import NavBar from "./NavBar";
import ProfileContainer from "./profile/ProfileContainer";
import UserDataCard from "./profile/UserDataCard";
import AuthContainer from './AuthContainer';


import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/user";

function App() {

  const { user } = useContext(UserContext)

  // const userLogedIn = window.localStorage.getItem("isLoggedIn");

  console.log("user from App:", user)
  if (!user) return < AuthContainer />

  return (
      <div className="bg-[#0F4880]">
        <NavBar />

        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/profile" element={<ProfileContainer />}/>
          <Route path="/expenses" element={<h1>expenses</h1>}/>
          <Route path="/profile/security" element={<UserDataCard />}/>
          <Route path="/profile/analytics" element={<h1>Hello from User</h1>}/>
        </Routes>
          
      </div>
  )
}

export default App;