
import React from 'react'


const User = ({user}) => {
   
    console.log(user)
  return (
    <div className="user-card">

      <img
        className="user-image"
        src={user.image}
        alt="User"
      />

      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>

    </div>
  )
}

export default User

