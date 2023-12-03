import React, { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";



export default function Profile() {

  const {userData} = useContext(DataContext)

  return(
    <div>
      <div className="pt-16 flex flex-col">
        <img 
              className="h-20 mx-auto object-cover rounded-full w-20 border-2"
              src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
        {/* <h2 className="text-white pt-1 mx-auto">{userData[0].name}</h2> */}
      </div>
    </div>
  )
}