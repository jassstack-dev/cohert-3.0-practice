
import React from 'react'
import {useState} from 'react'

const Form = ({setUser}) => {

    console.log('re-redering')

const [formData, setFormData] = useState({
        name: "",
        email:"",
        image:""
    })

   
    

    const InputChange = (e) =>{
      const {name, value} = e.target
         setFormData({...formData, [name]: value})
    }
    

    const formSubmit = (e)=>{
        
        e.preventDefault()
    console.log('form submitted')
    setUser((prev)=> [...prev, formData])
        
    }


    

  return (
    <div className="form-container">

      <form onSubmit={formSubmit} className="user-form">

        <h2>Add User</h2>

        <div className="form-group">
          <label>Name</label>
          <input
          value = {formData.name}
onChange={InputChange}
          name= "name"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            value = {formData.email}
          onChange={InputChange}
          name="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            value = {formData.image}
          onChange={InputChange}
          name = "image"
            type="url"
            placeholder="Enter image URL"
          />
        </div>

        <button type="submit" className="submit-btn">
          Add User
        </button>

      </form>

    </div>
  )
}

export default Form
