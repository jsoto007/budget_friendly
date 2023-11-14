import React from "react"
import Profile from "./Profile"

export default function IndividualData() {
  return (
    <div className='sm:mx-1 md:mx-2 lg:mx-4'>
      <Profile />
      <div className='bg-neutral-100 rounded-md'>
        <div className='sm:mx-1 md:mx-2 lg:mx-4'>
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-black">User's Name</h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-900">Personal details and Security.</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-black">Full name</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-black">Email address</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-black">Income</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">$120,000</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-black">Password</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">Change Password</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-black">Five Year Goals</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                    qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                    pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                  </dd>
                </div>
              </dl>
            </div>
        </div>
      </div>
    </div>
  )
}
