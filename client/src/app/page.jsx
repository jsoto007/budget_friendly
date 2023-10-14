'use client' 

import Auth from "./components/Auth"
import { useContext } from "react";
import { UserContext } from "./context/UserContextProvider";

export default function Home() {

const {currentUser} = useContext(UserContext)

  if (!currentUser) return <Auth />

  return (
    <div>
      Hellor from Home {`${currentUser.email}`}
    </div>
  )
}
