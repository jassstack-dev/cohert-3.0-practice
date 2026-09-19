
import React from 'react'

const User = ({user}) => {
    console.log(user.name)
  return (
    <div className="min-h-screen  bg-slate-950 flex items-center justify-center px-4">

      <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">

        {/* User Image */}
        <div className="flex justify-center mb-5">
          <img
            src={user.image}
            alt="User"
            className="w-24 h-24 rounded-full object-cover border-4 border-slate-800"
          />
        </div>

        {/* User Info */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-white">
            {user.name}
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            {user.email}
          </p>
        </div>

      </div>

    </div>
  )
}

export default User

