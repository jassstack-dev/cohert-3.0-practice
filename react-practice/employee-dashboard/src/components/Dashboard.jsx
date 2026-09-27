import React, { useContext } from "react";
import { MyStore } from "../context/MyContent";

const Dashboard = () => {
    const {employees} = useContext(MyStore)
    

    const activeEmployee = employees.filter((val)=>{
       return val.isActive === "active"
    }).length

    const inActiveEmployee = employees.filter((val)=>{
        return val.isActive === "inactive"
    }).length
    
    
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Overview of your employee management system
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Total Employees */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Employees
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                  {employees.length}
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-lg">
                👥
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              All registered employees
            </p>
          </div>

          {/* Active Employees */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Active Employees
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                 {activeEmployee}
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-lg">
                ✓
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Currently working
            </p>
          </div>

          {/* On Leave */}
          {/* <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  On Leave
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                  14
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-lg">
                🕐
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Currently on leave
            </p>
          </div> */}

          {/* Inactive */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Inactive
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                  {inActiveEmployee}
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-lg">
                —
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Currently inactive
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;