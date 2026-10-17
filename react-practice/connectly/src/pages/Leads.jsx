import React, { useContext, useEffect, useState } from "react";
import { store } from "../context/DataContext";
import CreateLead from "./CreateLead";
import { NavLink } from "react-router";

const Leads = () => {
  const {
    leads,
    searchLeads,
    deleteBtn,
    updateBtn,
    updatePopup,
    setUpdatePopup,
  } = useContext(store);
  console.log(leads);
  const [debounceSearch, setDebounceSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceSearch(searchLeads);
    }, 700);

    return () => clearTimeout(timeout);
  }, [searchLeads]);

  const filteredLeads = leads.filter((val) => {
    return (
      val.companyName.toLowerCase().includes(debounceSearch.toLowerCase()) ||
      val.phone.includes(debounceSearch) ||
      val.contactName.toLowerCase().includes(debounceSearch.toLowerCase()) ||
      val.priority.toLowerCase().includes(debounceSearch.toLowerCase()) ||
      val.stage.toLowerCase().includes(debounceSearch.toLowerCase()) ||
      val.industry.toLowerCase().includes(debounceSearch.toLowerCase()) ||
      val.source.toLowerCase().includes(debounceSearch.toLowerCase()) ||
      val.email.toLowerCase().includes(debounceSearch.toLowerCase())
    ); 
  });

  console.log(filteredLeads);

  if (updatePopup) {
    return <CreateLead />;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage and track your business leads
        </p>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            {/* Table Head */}
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Lead
                </th>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Contact
                </th>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Source
                </th>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Industry
                </th>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Stage
                </th>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Priority
                </th>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Value
                </th>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Created
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Links
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100">
              {filteredLeads.length > 0 ? (
                filteredLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {/* Company */}
                    <td className="px-6 py-5">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {lead.companyName}
                        </p>

                        <p className="text-xs text-gray-400 mt-1">{lead.id}</p>
                      </div>
                    </td>

                    {/* Contact */}
                    <td className="px-6 py-5">
                      <p className="text-sm font-medium text-gray-800">
                        {lead.contactName}
                      </p>

                      <p className="text-xs text-gray-500 mt-1">{lead.email}</p>

                      <p className="text-xs text-gray-500">{lead.phone}</p>
                    </td>

                    {/* Source */}
                    <td className="px-6 py-5">
                      <span className="text-sm text-gray-600">
                        {lead.source}
                      </span>
                    </td>

                    {/* Industry */}
                    <td className="px-6 py-5">
                      <span className="text-sm text-gray-600">
                        {lead.industry}
                      </span>
                    </td>

                    {/* Stage */}
                    <td className="px-6 py-5">
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">
                        {lead.stage}
                      </span>
                    </td>

                    {/* Priority */}
                    <td className="px-6 py-5">
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-yellow-50 text-yellow-600">
                        {lead.priority}
                      </span>
                    </td>

                    {/* Value */}
                    <td className="px-6 py-5">
                      <span className="text-sm font-semibold text-gray-900">
                        ₹{lead.estimatedValue}
                      </span>
                    </td>

                    {/* Created */}
                    <td className="px-6 py-5">
                      <span className="text-sm text-gray-500">
                        {lead.createdAt}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setUpdatePopup(true);
                            updateBtn(lead.id);
                          }}
                          className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                        >
                          Update
                        </button>

                        <button
                          onClick={() => deleteBtn(lead.id)}
                          className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                        >
                          Delete
                        </button>
                        <NavLink
                          to={`/dashboard/lead-details/${lead.id}`}
                          className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                        >
                          view
                        </NavLink>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <p className="text-center p-10 font-semibold">User not found</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leads;
