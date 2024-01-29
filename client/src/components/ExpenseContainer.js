import React from "react";
import ExpenseForm from './forms/ExpenseForm';
import ExpenseTable from "./tables/ExpenseTable";

export default function ExpenseContainer() {

  return(
    <div className="pt-5 mx-4 pb-6">
      <ExpenseForm />
      <ExpenseTable />
    </div>
  )
}