'use client'
import { useState } from "react";

function Login() {

  const [email, password] = useState([]);

  return ( 
    <div>
      <form> 
        <label className="bg-white mx-3 text-black">Email</label>
        <input 
          type="text"
          id="email"
          input="text"
          value={email}
        />
       <button 
        type="submit"
        className="bg-white ml-3 pl-3 text-black"
       >Login</button>
      </form>
    </div>
  )
}

export default Login;