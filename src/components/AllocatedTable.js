import React from 'react';
import NavBar from './NavBar';

const AllocatedTable = () => {
  return (

    <>
      {/* <NavBar/>
      <div className="relative flex flex-wrap items-center justify-between px-5">
        <p className="text-3xl">My Assets</p>
        <hr/>
      </div> */}

      <div className="flex flex-col bg-white m-7 rounded-2xl drop-shadow-md p-3">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <div className="flex justify-start">
                <div className="mb-3 xl:w-96">
                  <input
                    type="search"
                    className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded-2xl
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="search"
                    placeholder="Search allocated asset..."
                  />
                </div>
              </div>
              <table className="min-w-full">
                <thead className="border-b bg-gray-50">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Asset id
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Name
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Category
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Description
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Quantity
                    </th>
                  </tr>
                </thead>
              </table>
              </div>
            </div>
          </div>
        </div> 
    </>
  )
}

export default AllocatedTable