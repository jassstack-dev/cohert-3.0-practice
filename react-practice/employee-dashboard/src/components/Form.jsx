import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/MyContent";
import { nanoid } from "nanoid";

const Form = () => {

    const {setEmployees, employees,updateData,setToggle}= useContext(MyStore)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues:updateData
  });

  function SubmitForm(data){
   if(updateData){
    let updatedEmployee = employees.map((employee)=>{
        if(employee.id === updateData.id){
            return {
                ...employee, ...data
            }
        }
        return employee;
        
        
    })
     setEmployees(updatedEmployee);

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployee)
    );

  

    alert('edit successfully')

    return

   }else{
     const arr = [...employees, {...data, id:nanoid(), isActive: "active"}]
   setEmployees(arr)
  localStorage.setItem('employees', JSON.stringify(arr))
   }
   setToggle('dashboard')
   alert('create submit')
  reset()
   

  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Add Employee</h1>
          <p className="mt-1 text-sm text-gray-500">
            Add a new employee to your organization
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
          <form  onSubmit={handleSubmit(SubmitForm)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
              {...register('name', {
                required:"name is required"
              })}
                type="text"
                placeholder="Enter employee name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
              />
              {errors.name && (
  <p className="mt-1 text-sm text-red-500">
    {errors.name.message}
  </p>
)}
              
            </div>
            

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
              {...register('email',{
                required: "email  is required"
              })}
                type="email"
                placeholder="Enter employee email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
              />
              {errors.email && (
  <p className="mt-1 text-sm text-red-500">
    {errors.email.message}
  </p>
)}
            </div>

            {/* Role + Department */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Role */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Role
                </label>

                <select 
                {...register('role',{
                    required: "role  is required"
                })}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black">
                  <option value="">Select role</option>
                  <option value="developer">Developer</option>
                  <option value="frontend-developer">Frontend Developer</option>
                  <option value="backend-developer">Backend Developer</option>
                  <option value="graphic-designer">Graphic Designer</option>
                </select>
                {errors.role && (
  <p className="mt-1 text-sm text-red-500">
    {errors.role.message}
  </p>
)}
              </div>

              {/* Department */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Department
                </label>

                <select
                {...register('department',{
                    required: "department  is  required"
                })}
                 className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black">
                  <option value="">Select department</option>
                  <option value="engineering">Engineering</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="hr">Human Resources</option>
                  <option value="sales">Sales</option>
                </select>{errors.department && (
  <p className="mt-1 text-sm text-red-500">
    {errors.department.message}
  </p>
)}
              </div>
            </div>

            {/* Salary */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Salary
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  ₹
                </span>

                <input
                {...register('salary',{
                    required: "salary is required"
                })}
                  type="number"
                  placeholder="Enter salary"
                  className="w-full rounded-lg border border-gray-300 py-3 pl-9 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
                />
                {errors.salary && (
  <p className="mt-1 text-sm text-red-500">
    {errors.salary.message}
  </p>
)}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">
              <button
             
             onClick={()=>{
                setToggle('dashboard')
            }}
            type="button"
                className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
             
        
                className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Add Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
