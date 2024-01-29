import React, { useState } from "react";

export default function ExpenseForm() {

  const [formData, setFormData] = useState({
    expense: "", 
    expenseDate: "", 
    description: "", 
    category: ""
  })
  
  function handleChange(e) {
    const key = e.target.id;
    setFormData({
      ...formData,
      [key]: e.target.value
    })
  }

  const categoryOptions = [
          "Other", 
          "Utilities", 
          "Mortgage / Rent", 
          "Subscriotions", 
          "Health Care", 
          "Food", 
          "Transportation"
        ]


  return (
    <form className=" pt-20 pb-6">
      <div className="space-y-12 bg-neutral-200 pt-4 rounded-lg sm:mx-2 md:mx-4 lg:mx-8">
        <h1 className="text-lg font-bold ml-4">New Expense Form</h1>
        <div className="border-b border-gray-900/10 pb-12">
        
          <div className="mt-10  sm:mx-2 mx-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="expense" className="block text-sm font-medium leading-6 text-gray-900">
                Expense
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="expense"
                  id="expense"
                  value={formData.expense}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="expenseDate"
                  id="expenseDate"
                  value={formData.date}
                  onChange={handleChange}
                  className="block w-30 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  type="textarea"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="category" className="block text-md font-medium leading-6 text-gray-900">
                Category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  autoComplete="category-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {categoryOptions.map((category) => {
                    return (
                      <option key={category}>{category}</option>
                    )
                  })}
                </select>
              </div>
            </div>
              <button  type="submit" className="bg-blue-500 hover:bg-blue-700 text-white sm:mt-10 sm:ml-2 font-bold sm:py-2 sm:px-4 border border-blue-700 rounded">
                Add Expense
              </button>
          </div>
        </div>
      </div>
    </form>
  )
}
