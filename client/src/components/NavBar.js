import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../context/user";

function NavBar() {

  const {setUser} = useContext(UserContext);


  // function handleReload() {
  //   setTimeout(function(){
  //     window.location.reload();
  // }, 100);
  // }

  function handleLogout() {
    fetch("/logout", 
    {  method: 'DELETE'})
    .then((resp) => {

      if (resp.ok) {

        setUser(null);
        
      }      
  })
  }

  return (
    <div>
      <div className=" flex flex-row w-full fixed z-10 backdrop-blur-md bg-neutral-200/30 rounded-md py-2 pr-11 font-serif font-light dark:bg-sky-950/50">
        <div className="m-auto font-sans text-sm text-white">
          <button className="focus:outline-none  focus:bg-[#0f4880] focus:text-white lg:mx-8 hover:bg-slate-200 rounded-md active:bg-slate-300 px-1 py-1 dark:hover:bg-slate-500 dark:active:bg-slate-600 dark:focus:bg-slate-700">
              <Link to="/dashboard">Dashboard</Link>
          </button>
          <button className=" focus:outline-none  focus:bg-[#0f4880] focus:text-white lg:mx-8 hover:bg-slate-200 rounded-md active:bg-slate-300 px-1 py-1 dark:hover:bg-slate-500 dark:active:bg-slate-600 dark:focus:bg-slate-700">
              Contact us
          </button>
          <button className="focus:outline-none  focus:bg-[#0f4880] focus:text-white lg:mx-8 hover:bg-slate-200 rounded-md active:bg-slate-300 px-1 py-1 dark:hover:bg-slate-500 dark:active:bg-slate-600 dark:focus:bg-slate-700">
              FAQ
          </button>
        </div>
        <div className="absolute right-0 font-sans font-bold">
          <button onClick={handleLogout} className="lg:mr-10 p-1 px-3 bg-[#0f4880]/20 rounded-full text-neutral-200">
            Sign out
          </button>
        </div>
    </div>
    </div>
  )

}

export default NavBar;