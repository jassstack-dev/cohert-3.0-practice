import React, { useContext } from "react";
import {
  Building2,
  UserRound,
  Mail,
  Phone,
  DollarSign,
  FileText,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { store } from "../context/DataContext";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const CreateLead = () => {
  const { leads, setLeads, updatePopup, setUpdatePopup,updateLead} = useContext(store);
  console.log(leads);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:updateLead
  });



  function formSubmit(data) {

    if(updateLead){
    const updatedLeads = leads.map((val)=>{
     return val.id === updateLead.id ? {...val, ...data } : val
    })
      setLeads(updatedLeads)
      localStorage.setItem("leads", JSON.stringify(updatedLeads));
       toast.success("Lead updated successfully");
      setUpdatePopup(false)
      
  }else{
    const newLead = {
      ...data,
      id: uuidv4(),
    };

    const arr = [...leads, newLead];

    setLeads(arr);
    toast.success('lead created successfully')

    localStorage.setItem("leads", JSON.stringify(arr));
  }

    
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Create New Lead</h1>

        <p className="mt-1 text-sm text-gray-500">
          Add a new prospect to your sales pipeline.
        </p>
      </div>

      {/* Form Card */}
      
<form
  onSubmit={handleSubmit(formSubmit)}
  className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white shadow-sm"
>
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
        <h3 className="font-semibold text-gray-800">Company Details</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Company Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            {...register("companyName", {
              required: "Company name is required",
              minLength: {
                value: 2,
                message: "Name must contain at least 2 characters",
              },
            })}
            type="text"
            placeholder="e.g. TechNova Solutions"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          {errors.companyName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.companyName.message}
            </p>
          )}
        </div>

        {/* Industry */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Industry
          </label>
          <select
            {...register("industry", {
              required: "Industry is required",
            })}
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-indigo-500"
          >
            <option value="">Select industry</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Retail">Retail</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
          {errors.industry && (
            <p className="mt-1 text-sm text-red-500">
              {errors.industry.message}
            </p>
          )}
        </div>
      </div>
    </section>

    {/* Contact Details */}
    <section>
      <div className="mb-5 flex items-center gap-2">
        <UserRound size={19} className="text-indigo-600" />
        <h3 className="font-semibold text-gray-800">Contact Details</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Contact Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Contact Name
          </label>
          <input
            {...register("contactName", {
              required: "Contact name is required",
              minLength: {
                value: 2,
                message: "Contact name must contain at least 2 characters",
              },
            })}
            type="text"
            placeholder="e.g. Alex Morgan"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          {errors.contactName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.contactName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <div className="flex items-center rounded-lg border border-gray-200 px-3 focus-within:border-indigo-500">
            <Mail size={17} className="text-gray-400" />
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              placeholder="alex@company.com"
              className="w-full px-3 py-3 text-sm outline-none"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="flex items-center rounded-lg border border-gray-200 px-3 focus-within:border-indigo-500">
            <Phone size={17} className="text-gray-400" />
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[0-9\s-]{10,15}$/,
                  message: "Enter a valid phone number",
                },
              })}
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full px-3 py-3 text-sm outline-none"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Lead Source */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Lead Source
          </label>
          <select
            {...register("source", {
              required: "Lead source is required",
            })}
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-indigo-500"
          >
            <option value="">Select source</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Website">Website</option>
            <option value="Referral">Referral</option>
            <option value="Cold Call">Cold Call</option>
            <option value="Email">Email</option>
            <option value="Other">Other</option>
          </select>
          {errors.source && (
            <p className="mt-1 text-sm text-red-500">
              {errors.source.message}
            </p>
          )}
        </div>
      </div>
    </section>

    {/* Pipeline Details */}
    <section>
      <div className="mb-5 flex items-center gap-2">
        <FileText size={19} className="text-indigo-600" />
        <h3 className="font-semibold text-gray-800">Pipeline Details</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Stage */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Pipeline Stage
          </label>
          <select
            {...register("stage", {
              required: "Pipeline stage is required",
            })}
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-indigo-500"
          >
            <option value="">Select stage</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Proposal">Proposal</option>
            <option value="Negotiation">Negotiation</option>
            <option value="Won">Won</option>
            <option value="Lost">Lost</option>
          </select>
          {errors.stage && (
            <p className="mt-1 text-sm text-red-500">
              {errors.stage.message}
            </p>
          )}
        </div>

        {/* Priority */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Priority
          </label>
          <select
            {...register("priority", {
              required: "Priority is required",
            })}
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-indigo-500"
          >
            <option value="">Select priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          {errors.priority && (
            <p className="mt-1 text-sm text-red-500">
              {errors.priority.message}
            </p>
          )}
        </div>

        {/* Estimated Value */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Estimated Value
          </label>
          <div className="flex items-center rounded-lg border border-gray-200 px-3 focus-within:border-indigo-500">
            <DollarSign size={17} className="text-gray-400" />
            <input
              {...register("estimatedValue", {
                required: "Estimated value is required",
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: "Value cannot be negative",
                },
              })}
              type="number"
              min="0"
              placeholder="25000"
              className="w-full px-3 py-3 text-sm outline-none"
            />
          </div>
          {errors.estimatedValue && (
            <p className="mt-1 text-sm text-red-500">
              {errors.estimatedValue.message}
            </p>
          )}
        </div>

        {/* Created Date */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Created Date
          </label>
          <input
            {...register("createdAt", {
              required: "Created date is required",
            })}
            type="date"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-600 outline-none focus:border-indigo-500"
          />
          {errors.createdAt && (
            <p className="mt-1 text-sm text-red-500">
              {errors.createdAt.message}
            </p>
          )}
        </div>
      </div>
    </section>

    {/* Notes */}
    <section>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Notes
      </label>
      <textarea
        {...register("notes", {
          required: "Notes are required",
          minLength: {
            value: 3,
            message: "Notes must contain at least 3 characters",
          },
        })}
        rows={4}
        placeholder="Add details about the lead, requirements, or discussions..."
        className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      />
      {errors.notes && (
        <p className="mt-1 text-sm text-red-500">
          {errors.notes.message}
        </p>
      )}
    </section>
  </div>

  {/* Footer */}
  <div className="flex flex-col-reverse gap-3 rounded-b-2xl border-t border-gray-100 bg-gray-50/70 px-6 py-5 sm:flex-row sm:justify-end">
    <button
      type="button"
      onClick={() => setUpdatePopup(false)}
      className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
    >
      Cancel
    </button>

    <button
      type="submit"
      className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
    >
      Create Lead
    </button>
  </div>
</form>

    </div>
  );
};

export default CreateLead;
