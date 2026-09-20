import React from 'react'

const User = ({product}) => {
    console.log(product)
  return (
    product.map((elem, id)=> {
return       <div  className="user-card">

      <img
        src={elem.image}
        alt="Product"
        className="user-image"
      />

      <div className="user-info">
        <h2>{elem.name}</h2>

        <p>
          {elem.description}
        </p>

        <h3>{elem.price}</h3>
      </div>

      <button className="delete-btn">
        Delete
      </button>

    </div>
    })
  )
}

export default User