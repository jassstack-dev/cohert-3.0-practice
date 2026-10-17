
import React, { useContext } from 'react'
import { Search, Bell, ChevronDown } from 'lucide-react'
import { store } from '../context/DataContext'

const Topbar = () => {
  const { searchLeads, setSearchLeads } = useContext(store)

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 sticky top-0 z-30">

      <div className="flex items-center justify-between gap-3">

        {/* Left */}
        <div className="min-w-0">
          <h2 className="text-base sm:text-xl font-semibold text-gray-900">
            Welcome back, Vimal 👋
          </h2>

          <p className="hidden sm:block text-sm text-gray-500 mt-1">
            Here's what's happening with your leads today.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-5">

          {/* Search - Desktop */}
          <div className="hidden md:flex items-center w-48 lg:w-64 h-10 bg-gray-50 border border-gray-200 rounded-xl px-3 gap-2">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />

            <input
              value={searchLeads}
              onChange={(e) => setSearchLeads(e.target.value)}
              type="text"
              placeholder="Search by Company Name"
              className="w-full min-w-0 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Notification */}
          <div className="relative shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50">
            <Bell className="w-5 h-5 text-gray-600" />

            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </div>

          {/* User */}
          <div className="flex items-center gap-2 sm:gap-3 sm:pl-4 sm:border-l border-gray-200 cursor-pointer shrink-0">

            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="User"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
            />

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">
                Vimal
              </p>

              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>

            <ChevronDown className="hidden sm:block w-4 h-4 text-gray-400" />

          </div>
        </div>
      </div>

      {/* Search - Mobile */}
      <div className="flex md:hidden items-center w-full h-10 mt-4 bg-gray-50 border border-gray-200 rounded-xl px-3 gap-2">
        <Search className="w-4 h-4 text-gray-400 shrink-0" />

        <input
          value={searchLeads}
          onChange={(e) => setSearchLeads(e.target.value)}
          type="text"
          placeholder="Search by Company Name"
          className="w-full min-w-0 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
        />
      </div>

    </header>
  )
}

export default Topbar
