import { useState } from 'react'

export default  function Signup( { onChangeLogin } ) {

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password:""
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('/signup', {
      method: "POST", 
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify(formData)
    });
    const data = await response.json();
    if(response.ok){
      setFormData(data)
      window.localStorage.setItem("isLoggedIn", true)
      handleReload()
    }
  }

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

  return( 
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 db-white dark:bg-slate-200">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
 
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Signup
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
            
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Full Name
            </label>
          </div>
          
          <div className="mt-2">
            <input
              id="name"
              name="name"
              value={formData.value}
              onChange={handleChange}
              type="name"
              autoComplete="name"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2"
            />
          </div>
          
        </div>
        <div>
          <div className="flex items-center justify-between">
            
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
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
            className="flex w-full justify-center rounded-md bg-emerald-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Create Account
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Already a member?{' '}
        <a 
          href="#" 
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          onClick={onChangeLogin}
        >
        Click Here to Login!
        </a>
      </p>
    </div>
  </div>
  )
}