import React, { useContext } from "react";
import { MyStore } from "../context/MyContent";


const AllEmployee = () => {
    const {employees,deleteEmployees,updateEmployee,setToggle,updateEmployeeStatus} = useContext(MyStore)
   
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            All Employees
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage all employees in your organization
          </p>
        </div>

        {/* Employee Card */}
        {
            employees.map((val)=>{
                return <div key={val.id} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

          {/* Top Section */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* Employee Info */}
            <div className="flex items-center gap-4">

              {/* Avatar */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-700">
                J
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {val.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {val.email}
                </p>
              </div>

            </div>

            {/* Status */}
            <div>
              <select
              value={val.isActive}
              onChange={(e)=>updateEmployeeStatus(val.id, e.target.value)}
                
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 outline-none focus:border-black focus:ring-1 focus:ring-black"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

          </div>

          {/* Employee Details */}
          <div className="mt-6 grid grid-cols-1 gap-4 border-t border-gray-100 pt-5 sm:grid-cols-3">

            {/* Role */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Role
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-900">
                {val.role}
              </p>
            </div>

            {/* Department */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Department
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-900">
                {val.department}
              </p>
            </div>

            {/* Salary */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Salary
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-900">
                ₹{val.salary} / month
              </p>
            </div>

          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">

            <button
            onClick={()=>{
                updateEmployee(val.id)
                setToggle('addEmployee')
                
            }}
              className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Edit
            </button>

            <button
            onClick={()=>{

                deleteEmployees(val.id)
            }}
              className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Delete
            </button>

          </div>

        </div>
            })
        }
      </div>
    </div>
  );
};

export default AllEmployee;