import React, { useContext } from "react";
import { UserContext } from "../../context/user";

export default function ExpenseTable() {

  const { user } = useContext(UserContext)

  const userExpense = user.expenses

  console.log(user)

  return (

    <div className="relative overflow-x-auto shadow-md rounded-lg pt-20">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Expense name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Recurrence
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
              {userExpense?.map((expense) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={expense.id}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {expense.expense_name}
                    </th>
                    <td className="px-6 py-4">
                        ${expense.expense_incurred}
                    </td>
                    <td className="px-6 py-4">
                        {expense.category}
                    </td>
                    <td className="px-6 py-4">
                        {expense.recurrence}
                    </td>
                    <td className="px-6 py-4">
                        {expense.id} 22-2024
                    </td>
                    <td className="px-6 py-4 text-right">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>

                )
              })}
            
            </tbody>
        </table>
    </div>

  )
}