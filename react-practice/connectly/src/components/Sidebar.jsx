
import React, { useContext, useState } from "react";
import {
  LayoutDashboard,
  MessageSquare,
  Headset,
  LogOut,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router";
import { store } from "../context/DataContext";

const Sidebar = () => {
  const { setUpdatePopup, setUpdateLead } = useContext(store);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-white border-b flex items-center justify-between px-4 z-50">
        <h1 className="text-xl font-bold text-gray-900">Connectly</h1>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/40 z-40"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r border-gray-200 flex flex-col transition-transform duration-300
        md:sticky md:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo */}
        <div className="h-20 px-6 flex items-center border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900">Connectly</h1>
              <p className="text-[11px] text-gray-400">
                Connect • Communicate
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6">
          <p className="px-3 mb-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            Main Menu
          </p>

          <nav className="space-y-1">
            <NavLink
              to="/dashboard"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 px-3 py-3 rounded-xl bg-indigo-50 text-indigo-600"
                  : "flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600"
              }
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="text-sm font-semibold">Dashboard</span>
            </NavLink>

            <NavLink
              onClick={() => {
                setUpdatePopup(false);
                setIsOpen(false);
              }}
              to="/dashboard/leads"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 px-3 py-3 rounded-xl bg-indigo-50 text-indigo-600"
                  : "flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600"
              }
            >
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm font-semibold">Leads</span>
            </NavLink>

            <NavLink
              onClick={() => {
                setUpdatePopup(false);
                setUpdateLead(null);
                setIsOpen(false);
              }}
              to="/dashboard/create-leads"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 px-3 py-3 rounded-xl bg-indigo-50 text-indigo-600"
                  : "flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600"
              }
            >
              <Headset className="w-5 h-5" />
              <span className="text-sm font-semibold">Create Leads</span>
            </NavLink>
          </nav>
        </div>

        {/* Bottom User Section */}
        <div className="p-4 border-t border-gray-100 shrink-0">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
              V
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                Admin User
              </p>
              <p className="text-xs text-gray-400 truncate">
                admin@connectly.com
              </p>
            </div>

            <LogOut className="w-4 h-4 text-gray-400 cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
