import { Route, Routes } from 'react-router-dom';
import Dashboard from "./Dashboard"
import NavBar from "./NavBar";
import ProfileContainer from "./profile/ProfileContainer";
import UserDataCard from "./profile/UserDataCard";
import AuthContainer from './AuthContainer';
import ExpenseContainer from './ExpenseContainer';


import React, { useContext, useEffect } from "react";


function App() {

  const userLogedIn = window.localStorage.getItem("isLoggedIn");

  if (!userLogedIn) return < AuthContainer />

  return (
      <div className="bg-[#0F4880]">
        <NavBar />

        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/profile" element={<ProfileContainer />}/>
          <Route path="/expenses" element={<ExpenseContainer />}/>
          <Route path="/profile/security" element={<UserDataCard />}/>
          <Route path="/profile/analytics" element={<h1>Hello from User</h1>}/>
        </Routes>
          
      </div>
  )
}

export default App;