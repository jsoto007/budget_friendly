import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import ExpenseContainer from "./ExpenseContainer";



export default function Profile() {

  const {userData} = useContext(DataContext)

  console.log("data", userData)

  return(
    <div>
      <h2 className="text-white pt-12">User Name</h2>
      <ExpenseContainer />
    </div>
  )
}