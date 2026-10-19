import React, { useContext } from 'react'
import { CalendarDays, Clock, Phone, ArrowUpRight } from 'lucide-react'
import { store } from '../context/DataContext'
import { NavLink } from 'react-router'

const FollowUp = () => {

     const {followUpData} = useContext(store)
     
    


  const statusStyles = {
    today: 'bg-amber-50 text-amber-700 ring-amber-200',
    overdue: 'bg-red-50 text-red-600 ring-red-200',
    upcoming: 'bg-blue-50 text-blue-700 ring-blue-200',
    lost: 'bg-gray-100 text-gray-500 ring-gray-200',
  }

  return (
    <div className="p-5 md:p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Follow-ups
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Keep track of your client conversations and upcoming follow-ups.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600">
          <CalendarDays size={17} />
          Follow-up Overview
        </div>
      </div>

      {/* Summary Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Due Today', count: 1, color: 'text-amber-600' },
          { label: 'Overdue', count: 1, color: 'text-red-600' },
          { label: 'Upcoming', count: 1, color: 'text-blue-600' },
          { label: 'Lost Leads', count: 1, color: 'text-gray-500' },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <p className="text-sm text-gray-500">{item.label}</p>
            <h2 className={`mt-2 text-2xl font-bold ${item.color}`}>
              {item.count}
            </h2>
          </div>
        ))}
      </div>

      {/* Follow-up List */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-gray-100 px-5 py-4">
          <Clock size={18} className="text-gray-500" />
          <h2 className="font-semibold text-gray-900">
            Follow-up Schedule
          </h2>
        </div>

        <div className="divide-y divide-gray-100">
          {followUpData.map((lead) => (
            <div
              key={lead.id}
              className="flex flex-col gap-4 px-5 py-5 transition hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex min-w-0 items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                  <Phone size={19} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900">
                    {lead.company} <span className='text-sm'>({lead.id})</span>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Description : {lead.description}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    <span className="font-medium">Created date:</span>{' '}
                    {lead.createdAt}
                  </p>
                  
                  <p className="mt-2 text-sm text-gray-600">
                    <span className="font-medium">Follow-up date:</span>{' '}
                    {lead.followUpDate}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 sm:justify-end">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium ring-1 ring-inset ${statusStyles[lead.type]}`}
                >
                  {lead.stage}
                </span>

                <NavLink
                to={`/dashboard/detail-follow-up/${lead.id}`}
                  type="button"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-gray-400 hover:bg-white hover:text-gray-900"
                  aria-label={`View ${lead.company}`}
                >
                  <ArrowUpRight size={17} />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FollowUp