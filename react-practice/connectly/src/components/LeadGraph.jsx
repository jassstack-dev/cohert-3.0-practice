import React, { useContext } from 'react'
import { store } from '../context/DataContext'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const LeadGraph = () => {
  const { leads } = useContext(store)

  const stages = [
    'New',
    'Contacted',
    'Qualified',
    'Proposal',
    'Negotiation',
    'Won',
    'Lost'
  ]

  const chartData = stages.map((stage) => ({
    stage,
    count: leads.filter((lead) => lead.stage === stage).length
  }))

  return (
    <div className="p-5">
      <h2 className="mb-1 text-2xl font-bold">
        Leads Overview
      </h2>

      <p className="mb-6 text-sm text-gray-500">
        Track your leads across different stages
      </p>

      <div className="h-80 w-full rounded-xl border bg-white p-5 shadow-sm">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="stage" />

            <YAxis allowDecimals={false} />

            <Tooltip />

            <Bar
              dataKey="count"
              name="Total Leads"
              fill="#6366f1"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default LeadGraph