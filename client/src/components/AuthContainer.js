import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function AuthContainer() {

  const [showLogin, setShowLogin] = useState(true)

  function changeLogintoSignup() {
    setShowLogin((showLogin) => !showLogin)
  }

  return (
    <div> 
      {showLogin ? (<Login onChangeLogin={changeLogintoSignup} />):(<Signup onChangeLogin={changeLogintoSignup} />)}
    </div>
  )
}


export default AuthContainer; 