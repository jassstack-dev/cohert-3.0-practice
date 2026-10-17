
import React, { useContext } from "react";
import {
  ArrowLeft,
  Building2,
  UserRound,
  Mail,
  Phone,
  MessageCircle,
  CalendarDays,
  IndianRupee,
  BriefcaseBusiness,
  Flag,
  Clock3,
  Pencil,
  MoreHorizontal,
  MailCheck,
  Globe,
  FileText,
} from "lucide-react";
import { NavLink, useParams } from "react-router";
import { store } from "../context/DataContext";

const LeadDetails = () => {

    const {id} = useParams()
    const {leads} = useContext(store)
  
    const lead = leads.find((val)=>{
        return val.id === id
    })

    if(!lead){
        return  <h2 className="text-xl font-semibold">
          Lead not found
        </h2>
    }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Top Navigation */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <NavLink
          to={"/dashboard/leads"}
           className="flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900">
            <ArrowLeft size={18} />
            Back to Leads
          </NavLink>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100">
              <Pencil size={16} />
              Edit Lead
            </button>

            <button className="rounded-lg border border-gray-200 bg-white p-2.5 text-gray-600 shadow-sm hover:bg-gray-100">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>

        {/* Lead Header */}
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Building2 size={30} />
              </div>

              <div>
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                    {lead.companyName}
                  </h1>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {lead.stage}
                  </span>
                </div>

                <p className="text-sm text-gray-500">
                  {lead.id}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <UserRound size={16} />
                    {lead.contactName}
                  </span>

                  <span className="flex items-center gap-2">
                    <Mail size={16} />
                    {lead.email}
                  </span>

                  <span className="flex items-center gap-2">
                    <Phone size={16} />
                    {lead.phone}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Actions - UI only */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700">
                <MessageCircle size={18} />
                WhatsApp
              </button>

              <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                <Mail size={18} />
                Send Email
              </button>
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">Estimated Value</span>
              <IndianRupee size={19} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              ₹{lead.estimatedValue}
            </h2>
            <p className="mt-2 text-xs text-gray-400">
              Potential deal value
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">Lead Stage</span>
              <Flag size={19} className="text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {lead.stage}
            </h2>
            <p className="mt-2 text-xs text-gray-400">
              Current sales stage
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">Priority</span>
              <Clock3 size={19} className="text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {lead.priority}
            </h2>
            <p className="mt-2 text-xs text-gray-400">
              Follow-up priority
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">Created On</span>
              <CalendarDays size={19} className="text-purple-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              {lead.createdAt}
            </h2>
            <p className="mt-2 text-xs text-gray-400">
              Lead creation date
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">

          {/* Left Column */}
          <div className="space-y-6 lg:col-span-2">

            {/* Company Information */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                  <Building2 size={20} />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">
                    Company Information
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Business and organization details
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <p className="mb-1.5 text-sm text-gray-500">
                    Company Name
                  </p>
                  <p className="font-medium text-gray-900">
                    {lead.companyName}
                  </p>
                </div>

                <div>
                  <p className="mb-1.5 text-sm text-gray-500">
                    Industry
                  </p>
                  <p className="font-medium text-gray-900">
                    {lead.industry}
                  </p>
                </div>

                <div>
                  <p className="mb-1.5 text-sm text-gray-500">
                    Lead Source
                  </p>
                  <p className="flex items-center gap-2 font-medium text-gray-900">
                    <Globe size={16} className="text-gray-400" />
                    {lead.source}
                  </p>
                </div>

                <div>
                  <p className="mb-1.5 text-sm text-gray-500">
                    Contact Person
                  </p>
                  <p className="font-medium text-gray-900">
                    {lead.contactName}
                  </p>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="rounded-lg bg-purple-50 p-2 text-purple-600">
                  <FileText size={20} />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">
                    Notes & Requirements
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Additional information about this lead
                  </p>
                </div>
              </div>

              <p className="text-sm leading-7 text-gray-600">
                {lead.notes}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">

            {/* Contact Details */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 font-semibold text-gray-900">
                Contact Details
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-gray-100 p-2 text-gray-600">
                    <UserRound size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Full Name</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">
                     {lead.contactName}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-gray-100 p-2 text-gray-600">
                    <Mail size={17} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">Email Address</p>
                    <p className="mt-1 break-all text-sm font-medium text-gray-900">
                      {lead.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-gray-100 p-2 text-gray-600">
                    <Phone size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Phone Number</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      {lead.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-gray-100 pt-5">
                <button className="flex items-center justify-center gap-2 rounded-lg border border-green-200 py-2.5 text-sm font-medium text-green-700 transition hover:bg-green-50">
                  <MessageCircle size={16} />
                  WhatsApp
                </button>

                <button className="flex items-center justify-center gap-2 rounded-lg border border-blue-200 py-2.5 text-sm font-medium text-blue-700 transition hover:bg-blue-50">
                  <MailCheck size={16} />
                  Email
                </button>
              </div>
            </div>

            {/* Lead Activity */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 font-semibold text-gray-900">
                Lead Activity
              </h2>

              <div className="space-y-5">
                <div className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Lead created
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {lead.createdAt}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Stage updated
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Moved to {lead.stage}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Follow-up pending
                    </p>
                    
                    <p className="mt-1 text-xs text-gray-500">
                      {lead.stage === "Qualified"
    ? "Lead completed"
    : "This lead is pending"}

                    </p>


                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
