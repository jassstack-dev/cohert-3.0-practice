import React, { useContext } from 'react'
import { store } from '../context/DataContext'
import { Users, UserPlus, Flame, CheckCircle } from 'lucide-react'

const StateCards = () => {

      const {leads} = useContext(store)

  const newLeads = leads.filter((val)=>{
    return val.stage === 'New'
  })
 

const contactedLeads = leads.filter((val) => val.stage === 'Contacted').length;

const qualifiedLeads = leads.filter((val) => val.stage === 'Qualified').length;

const proposalLeads = leads.filter((val) => val.stage === 'Proposal').length;

const negotiationLeads = leads.filter((val) => val.stage === 'Negotiation').length;

const wonLeads = leads.filter((val) => val.stage === 'Won').length;

const lostLeads = leads.filter((val) => val.stage === 'Lost').length;

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

  {/* Total Leads */}
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/60 hover:shadow-xl hover:shadow-slate-200/50">
    <div className="flex items-center justify-between">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Leads</p>
      <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-600 transition-transform duration-300 group-hover:scale-110">
        <Users size={20} />
      </div>
    </div>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">{leads.length}</h2>
    <p className="mt-1 text-xs font-medium text-slate-400">Overview of your leads</p>
  </div>

  {/* New Leads */}
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/60 hover:shadow-xl hover:shadow-slate-200/50">
    <div className="flex items-center justify-between">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">New Leads</p>
      <div className="rounded-xl bg-purple-500/10 p-2.5 text-purple-600 transition-transform duration-300 group-hover:scale-110">
        <UserPlus size={20} />
      </div>
    </div>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">{newLeads.length}</h2>
    <p className="mt-1 text-xs font-medium text-slate-400">Recently added leads</p>
  </div>

  {/* Contacted Leads */}
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-xl hover:shadow-slate-200/50">
    <div className="flex items-center justify-between">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Contacted Leads</p>
      <div className="rounded-xl bg-cyan-500/10 p-2.5 text-cyan-600 transition-transform duration-300 group-hover:scale-110">
        <Users size={20} />
      </div>
    </div>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">{contactedLeads}</h2>
    <p className="mt-1 text-xs font-medium text-slate-400">Leads already contacted</p>
  </div>

  {/* Qualified Leads */}
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/60 hover:shadow-xl hover:shadow-slate-200/50">
    <div className="flex items-center justify-between">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Qualified Leads</p>
      <div className="rounded-xl bg-indigo-500/10 p-2.5 text-indigo-600 transition-transform duration-300 group-hover:scale-110">
        <CheckCircle size={20} />
      </div>
    </div>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">{qualifiedLeads}</h2>
    <p className="mt-1 text-xs font-medium text-slate-400">Potential qualified clients</p>
  </div>

  {/* Proposal Leads */}
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/60 hover:shadow-xl hover:shadow-slate-200/50">
    <div className="flex items-center justify-between">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Proposal Leads</p>
      <div className="rounded-xl bg-amber-500/10 p-2.5 text-amber-600 transition-transform duration-300 group-hover:scale-110">
        <Flame size={20} />
      </div>
    </div>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">{proposalLeads}</h2>
    <p className="mt-1 text-xs font-medium text-slate-400">Proposals shared with clients</p>
  </div>

  {/* Negotiation Leads */}
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/60 hover:shadow-xl hover:shadow-slate-200/50">
    <div className="flex items-center justify-between">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Negotiation Leads</p>
      <div className="rounded-xl bg-orange-500/10 p-2.5 text-orange-600 transition-transform duration-300 group-hover:scale-110">
        <Flame size={20} />
      </div>
    </div>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">{negotiationLeads}</h2>
    <p className="mt-1 text-xs font-medium text-slate-400">Leads under negotiation</p>
  </div>

  {/* Won Leads */}
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/60 hover:shadow-xl hover:shadow-slate-200/50">
    <div className="flex items-center justify-between">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Won Leads</p>
      <div className="rounded-xl bg-emerald-500/10 p-2.5 text-emerald-600 transition-transform duration-300 group-hover:scale-110">
        <CheckCircle size={20} />
      </div>
    </div>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">{wonLeads}</h2>
    <p className="mt-1 text-xs font-medium text-slate-400">Successfully converted leads</p>
  </div>

  {/* Lost Leads */}
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-rose-300/60 hover:shadow-xl hover:shadow-slate-200/50">
    <div className="flex items-center justify-between">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Lost Leads</p>
      <div className="rounded-xl bg-rose-500/10 p-2.5 text-rose-600 transition-transform duration-300 group-hover:scale-110">
        <Users size={20} />
      </div>
    </div>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">{lostLeads}</h2>
    <p className="mt-1 text-xs font-medium text-slate-400">Leads not converted</p>
  </div>

</div>
  )
}

export default StateCards