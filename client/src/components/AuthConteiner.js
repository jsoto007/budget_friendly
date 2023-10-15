import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function AuthConteiner() {

  const [isLogin, setIsLogin] = useState(true)

  function changeLogintoSignup() {
    setIsLogin((isLogin) => !isLogin)
  }

  return (
    <div> 
      {isLogin? (<Login onChangeLogin={changeLogintoSignup} />):(<Signup onChangeLogin={changeLogintoSignup} />)}
    </div>
  )
}