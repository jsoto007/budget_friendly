import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvier";
import ExpenseContainer from "./ExpenseContainer";



export default function Profile() {

  // const {data} = useContext(DataContext)



  return(
    <div>
      <h2 className="text-white pt-12">User Name</h2>
      <ExpenseContainer />
    </div>
  )
}