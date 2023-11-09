import React, {useEffect, useState} from "react"
import profile from "../images/profile.svg"
import book from "../images/book.svg"
import logOut from "../images/logOut.svg"
import sliders from "../images/sliders.svg"
import trending from "../images/trending.svg"
import { Link } from 'react-router-dom';



export default function Dashboard() {


  // to be deteled 
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:5555/users")
    .then(resp => resp.json())
    .then(data => {setUser(data)})
  }, [])


  return( 
    <div className="flex">
      <div className="bg-dark-blue h-screen p-5 pt-8 sm:w-16 md:w-48 flex justify-center">
        <div className="">
          <img 
            className="h-20 mx-auto object-cover rounded-full w-20 border-2 mt-10"
            src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <div className="sm:mt-10 dm:mt-10 lg:mt-20 hover:font-extrabold">
            <Link to="/profile">
              <img
                src={profile}
                width={40}
                height="auto"
                className="ml-5 mb-2"
                />
              <spam className="flex justify-center text-white text-sm">
                Profole
              </spam>
            </Link>
          </div>

          <div className="sm:mt-4 dm:mt-6 lg:mt-10 hover:font-extrabold">
            <Link to="/expenses">
              <img
                src={book}
                width={40}
                height="auto"
                className="ml-5 mb-2"
                />
              <spam className="flex justify-center text-white text-sm">
                Expenses
              </spam>
            </Link>
          </div>

          <div className="sm:mt-4 dm:mt-6 lg:mt-10 hover:font-extrabold">
            <img
              src={trending}
              width={40}
              height="auto"
              className="ml-5 mb-2"
            />
            <spam className="flex justify-center text-white text-sm">
              My Progress
            </spam>
          </div>

          <div className="sm:mt-4 dm:mt-6 lg:mt-10 hover:font-extrabold">
            <img
              src={sliders}
              width={40}
              height="auto"
              className="ml-5 mb-2"
            />
            <spam className="flex justify-center text-white text-sm">
              Settings
            </spam>
          </div>
        </div>
      </div>
     
      <div className="p-7 bg-neutral-200 my-20 rounded-xl lg:w-[85%] ">
        <div>
          <h1 className="text-2xl font-semibold">
            Dashboard
          </h1>
        </div>
        <div>

          <h1 className="mt-20 pr-72">Learning Today</h1>
        </div>
      </div>
     
    </div>
  )
}