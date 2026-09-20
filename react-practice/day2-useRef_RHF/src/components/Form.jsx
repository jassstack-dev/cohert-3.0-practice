import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Form = ({setProduct}) => {

      console.log('rendiring')

    const formRef = useRef({})



    const submitHandle = (e)=>{
        e.preventDefault()

        

        const obj = {
            name :formRef.current.name.value,
            description: formRef.current.description.value,
            price: formRef.current.price.value,
            image: formRef.current.image.value,
        }

        setProduct((prev)=> [...prev, obj])

    }



  return (
    <div className="form-container">

      <form onSubmit={submitHandle} className="product-form">

        <h2>Add Product</h2>

        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <input
          ref={(e)=> formRef.current.name = e}
            type="text"
            placeholder="Enter product name"
          />
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <textarea
          ref={(e)=> formRef.current.description = e}
            placeholder="Enter product description"
            rows="4"
          ></textarea>
        </div>

        {/* Price */}
        <div className="form-group">
          <label>Price</label>
          <input
          ref={(e)=> formRef.current.price = e}
            type="number"
            placeholder="Enter price"
          />
        </div>

        {/* image */}
        <div className="form-group">
          <label>Price</label>
          <input
          ref={(e)=> formRef.current.image = e}
            type="url"
            placeholder="Enter price"
          />
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button type="submit" className="submit-btn">
            Add Product
          </button>

          <button type="button" className="delete-btn">
            Delete
          </button>
        </div>

      </form>

    </div>
  )
}

export default Form