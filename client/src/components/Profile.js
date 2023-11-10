import React, { useContext } from "react";
import { UserContextProvider } from "../context/UserContextProvider";



export default function Profile() {


  return(
    <div className="pt-16">
      <div className="sm:grid grid-cols-1">
        <h3 className="ml-1 font-serif font-bold text-neutral-200">Fixed Expenses</h3>
          <div className="bg-neutral-200 w-auto mx-1 rounded-md mb-4">
            hello from the other side
            <ul>
              <li>Rent $1900 Montly</li>
              <li>Rent $1900 Montly</li>
              <li>Rent $1900 Montly</li>
              <li>Rent $1900 Montly</li>
            </ul>
          </div>
        <h3 className="ml-1 font-serif font-bold text-neutral-200">Other Expenses</h3>
          <div className="bg-neutral-200 w-auto mx-1 rounded-md">
            hello from the other side
            <ul className="my-6 ml-2">
              <li><span className="font-bold">Description | </span>Montly Rent</li>
              <li><span className="font-bold">Frequency | </span>Montly</li>
              <li><span className="font-bold">Amount | </span>$1990.95</li>
            </ul>
            <ul className="my-6 ml-2">
              <li><span className="font-bold">Description | </span>Montly Rent</li>
              <li><span className="font-bold">Frequency | </span>Montly</li>
              <li><span className="font-bold">Amount | </span>$1990.95</li>
            </ul>
            <ul className="my-6 ml-2">
              <li><span className="font-bold">Description | </span>Montly Rent</li>
              <li><span className="font-bold">Frequency | </span>Montly</li>
              <li><span className="font-bold">Amount | </span>$1990.95</li>
            </ul>
          </div>
      </div>
    </div>
  )
}