'use client'

import { useContext, useState } from "react";
import { UserContext } from "../context/user";




function Login( { onChangeLogin } ) {

  const { setUser } = useContext(UserContext);
  const { user } = useContext(UserContext)

  console.log(user)

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  async function handleSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: "POST", 
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify(formData)
    })
    .then((r) => {
      if (r.ok) {
        r.json().then(setUser)
      } else {
        alert("Must enter a valid username and password")

      }

    });
  }
  //   // const data = await response.json();
  //   if(response.ok){
  //     response.json().then(setUser)
  //     setFormData(data)
  //     window.localStorage.setItem("isLoggedIn", true)
  //     handleReload()
  //   } else {
  //   }
  // }

  function handleReload() {
    setTimeout(function(){
      window.location.reload();
  }, 100);
  }


  function handleChange(e) {
    const key = e.target.id
    setFormData({
      ...formData,
      [key]: e.target.value
    })
  }

  return ( 
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 db-white dark:bg-slate-200">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
     
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  value={formData.value}
                  onChange={handleChange}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={formData.value}
                  onChange={handleChange}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a 
              href="#" 
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              onClick={onChangeLogin}
            >
            Sing Up it's Free!
            </a>
          </p>
        </div>
      </div>
  )
}

export default Login;