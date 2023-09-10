'use client'
import { useState } from "react";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  function handleChange() {
    const key = e.target.value
    setFormData({
      ...formData, 
      [key]: e.target.value
    })
  }

  function handleChange(e) {
    const key = e.target.id
    setFormData({
      ...formData,
      [key]: e.target.value
    })
  }

  return ( 
    <div>
      <form> 
        <label className="bg-white mx-3 text-black">Email</label>
        <input 
          className="text-black"
          type="text"
          id="email"
          input="text"
          value={formData.email}
          onChange={handleChange}
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