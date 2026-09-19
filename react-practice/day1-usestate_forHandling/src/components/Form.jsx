
import React, { useState } from 'react'

const Form = ({setUsers}) => {


    const [formData, setFormData] = useState({
        name: "",
        email:"",
        image: ""
    })



    function dataChanging(e){
        
        let {name, value}= e.target
        setFormData({...formData, [name]: value})
       
    }


    function dataHandling(e){
        e.preventDefault()
       console.log('btn click hau')
       setUsers((prev) => [...prev, formData])
       setFormData({
        name:"",
        email: "",
        image:""
       })
    }




  return (
  
<form onSubmit={dataHandling} className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

  <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">

    <div className="mb-7">
      <h1 className="text-2xl font-bold text-white">
        Create Account
      </h1>

      <p className="text-sm text-slate-400 mt-1">
        Enter your details below.
      </p>
    </div>

    {/* Name */}
    <div className="mb-5">
      <label className="block text-sm font-medium text-slate-300 mb-2">
        Name
      </label>

      <input
      value={formData.name}
onChange={dataChanging}
        type="text"
        name="name"
        placeholder="Enter your name"
        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
      />
    </div>

    {/* Email */}
    <div className="mb-5">
      <label className="block text-sm font-medium text-slate-300 mb-2">
        Email
      </label>

      <input
      value={formData.email}
      onChange={dataChanging}
        type="email"
        name="email"
        placeholder="you@example.com"
        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
      />
    </div>

    {/* URL */}
    <div className="mb-5">
      <label className="block text-sm font-medium text-slate-300 mb-2">
        Website URL
      </label>

      <input
      value={formData.image}
       onChange={dataChanging}
        type="url"
        name="image"
        placeholder="https://example.com"
        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
      />
    </div>

    {/* Submit */}
    <button className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-600/20">
      Submit
    </button>

  </div>

</form>


  )
}

export default Form
