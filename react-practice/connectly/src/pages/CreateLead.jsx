
import React, { useContext } from 'react'
import {  Building2, UserRound, Mail, Phone, DollarSign, FileText } from 'lucide-react'
import { set, useForm } from 'react-hook-form'
import { store } from '../context/DataContext'
import { v4 as uuidv4 } from 'uuid';

const CreateLead = () => {

    const {leads, setLeads,updatePopup, setUpdatePopup} = useContext(store)
    console.log(leads)
  

    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        
    })

    function formSubmit(data){

        const newLead = {
            ...data,
            id: uuidv4()
        }
       

        const arr = [...leads, newLead]

        setLeads(arr)

          localStorage.setItem("leads", JSON.stringify(arr));

    }

  

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">

      {/* Header */}
      <div className="mb-8">
       
        <h1 className="text-2xl font-bold text-gray-900">
          Create New Lead
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Add a new prospect to your sales pipeline.
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit(formSubmit)} className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white shadow-sm">

        {/* Card Header */}
        <div className="border-b border-gray-100 px-6 py-5">
          <h2 className="text-lg font-semibold text-gray-900">
            Lead Information
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Enter the company and contact details below.
          </p>
        </div>

        <div className="space-y-8 p-6">

          {/* Company Details */}
          <section>
            <div className="mb-5 flex items-center gap-2">
              <Building2 size={19} className="text-indigo-600" />
              <h3 className="font-semibold text-gray-800">
                Company Details
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                {...register('companyName')}
                  type="text"
                  placeholder="e.g. TechNova Solutions"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Industry
                </label>
                <select {...register('industry')} className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-indigo-500">
                  <option value="">Select industry</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Manufacturing</option>
                  <option>Retail</option>
                  <option>Education</option>
                  <option>Other</option>
                </select>
              </div>

            </div>
          </section>

          {/* Contact Details */}
          <section>
            <div className="mb-5 flex items-center gap-2">
              <UserRound size={19} className="text-indigo-600" />
              <h3 className="font-semibold text-gray-800">
                Contact Details
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Contact Name
                </label>
                <input
                {...register('contactName')}
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="flex items-center rounded-lg border border-gray-200 px-3 focus-within:border-indigo-500">
                  <Mail size={17} className="text-gray-400" />
                  <input
                  {...register('email')}
                    type="email"
                    placeholder="alex@company.com"
                    className="w-full px-3 py-3 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="flex items-center rounded-lg border border-gray-200 px-3 focus-within:border-indigo-500">
                  <Phone size={17} className="text-gray-400" />
                  <input
                  {...register('phone')}
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-3 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Lead Source
                </label>
                <select {...register('source')} className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-indigo-500">
                  <option value="">Select source</option>
                  <option>LinkedIn</option>
                  <option>Website</option>
                  <option>Referral</option>
                  <option>Cold Call</option>
                  <option>Email</option>
                  <option>Other</option>
                </select>
              </div>

            </div>
          </section>

          {/* Pipeline Details */}
          <section>
            <div className="mb-5 flex items-center gap-2">
              <FileText size={19} className="text-indigo-600" />
              <h3 className="font-semibold text-gray-800">
                Pipeline Details
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Pipeline Stage
                </label>
                <select {...register('stage')} className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-indigo-500">
                  <option value="">Select stage</option>
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Qualified</option>
                  <option>Proposal</option>
                  <option>Negotiation</option>
                  <option>Won</option>
                  <option>Lost</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Priority
                </label>
                <select {...register('priority')} className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-indigo-500">
                  <option value="">Select priority</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Estimated Value
                </label>
                <div className="flex items-center rounded-lg border border-gray-200 px-3 focus-within:border-indigo-500">
                  <DollarSign size={17} className="text-gray-400" />
                  <input
                  {...register('estimatedValue')}
                    type="number"
                    placeholder="25000"
                    className="w-full px-3 py-3 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Created Date
                </label>
                <input
                {...register('createdAt')}
                  type="date"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-600 outline-none focus:border-indigo-500"
                />
              </div>

            </div>
          </section>

          {/* Notes */}
          <section>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Notes
            </label>
            <textarea
            {...register('notes')}
              rows={4}
              placeholder="Add details about the lead, requirements, or discussions..."
              className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </section>

        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse gap-3 rounded-b-2xl border-t border-gray-100 bg-gray-50/70 px-6 py-5 sm:flex-row sm:justify-end">
          <button 
          onClick={()=> setUpdatePopup(false)}
          className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
            Cancel
          </button>

          <button type='submit' className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">
            Create Lead
          </button>
        </div>

      </form>
    </div>
  )
}

export default CreateLead
