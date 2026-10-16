import React from "react";
import {
  LayoutDashboard,
  MessageSquare,
  Headset,
  Users,
  UserPlus,
  Settings,
  BarChart3,
  HelpCircle,
  LogOut,
  Zap,
} from "lucide-react";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-20 px-6 flex items-center border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">Connectly</h1>
            <p className="text-[11px] text-gray-400">Connect • Communicate</p>
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
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-3 py-3 rounded-xl bg-indigo-50 text-indigo-600 cursor-pointer"
                : "flex items-center gap-3 px-3 py-3 rounded-xl  text-black-600 cursor-pointer"
            }
            end
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm font-semibold">Dashboard</span>
          </NavLink>

          <NavLink
          to="/dashboard/leads"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-3 py-3 rounded-xl bg-indigo-50 text-indigo-600 cursor-pointer"
                : "flex items-center gap-3 px-3 py-3 rounded-xl  text-black-600 cursor-pointer"
            }
            
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm font-semibold">Leads</span>
          </NavLink>

          <NavLink
          to="/dashboard/create-leads"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-3 py-3 rounded-xl bg-indigo-50 text-indigo-600 cursor-pointer"
                : "flex items-center gap-3 px-3 py-3 rounded-xl  text-black-600 cursor-pointer"
            }
            
          >
            <Headset className="w-5 h-5" />
            <span className="text-sm font-semibold">Create Leads</span>
          </NavLink>

          
        </nav>
      </div>

      {/* Bottom User Section */}
      <div className="p-4 border-t border-gray-100">
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
  );
};

export default Sidebar;
