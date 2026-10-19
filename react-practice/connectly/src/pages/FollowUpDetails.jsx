
import React, { useContext } from 'react'
import { useParams, Link } from 'react-router'
import { store } from '../context/DataContext'
import {
  ArrowLeft,
  Building2,
  CalendarDays,
  Clock,
  Phone,
  FileText,
  Tag
} from 'lucide-react'

const FollowUpDetails = () => {
  const { id } = useParams()
  const { followUpData = [] } = useContext(store)

  const lead = followUpData.find(
    (val) => String(val.id) === id
  )

  if (!lead) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Follow-up not found
        </h2>

        <Link
          to="/dashboard/follow-up"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          Go back to Follow-ups
        </Link>
      </div>
    )
  }

  const details = [
    {
      label: 'Company Name',
      value: lead.company,
      icon: Building2
    },
    {
      label: 'Lead ID',
      value: lead.id,
      icon: Tag
    },
    {
      label: 'Stage',
      value: lead.stage,
      icon: Clock
    },
    {
      label: 'Created At',
      value: lead.createdAt,
      icon: CalendarDays
    },
    {
      label: 'Follow-up Date',
      value: lead.followUpDate,
      icon: CalendarDays
    },
    {
      label: 'Last Call',
      value: lead.LastCall,
      icon: Phone
    },
    {
      label: 'Type',
      value: lead.type,
      icon: Tag
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">

      {/* Header */}
      <div className="mb-6">
        <Link
          to="/dashboard/follow-up"
          className="mb-4 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
        >
          <ArrowLeft size={18} />
          Back to Follow-ups
        </Link>

        <h1 className="text-2xl font-bold text-gray-900">
          Follow-up Details
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Complete information about this follow-up.
        </p>
      </div>

      {/* Company Card */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">

        <div className="mb-6 flex items-center gap-4 border-b border-gray-100 pb-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Building2 size={28} />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {lead.company || 'Company not available'}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Lead ID: {lead.id}
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {details.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.label}
                className="rounded-lg border border-gray-100 bg-gray-50 p-4"
              >
                <div className="mb-3 flex items-center gap-2 text-gray-500">
                  <Icon size={17} />
                  <span className="text-sm">{item.label}</span>
                </div>

                <p className="break-words font-medium text-gray-900">
                  {item.value || 'Not available'}
                </p>
              </div>
            )
          })}
        </div>

        {/* Description */}
        <div className="mt-6 rounded-lg border border-gray-100 p-4">
          <div className="mb-3 flex items-center gap-2 text-gray-500">
            <FileText size={18} />
            <h3 className="text-sm font-medium">Description</h3>
          </div>

          <p className="whitespace-pre-wrap text-sm leading-6 text-gray-700">
            {lead.description || 'No description added yet.'}
          </p>
        </div>

      </div>
    </div>
  )
}

export default FollowUpDetails
