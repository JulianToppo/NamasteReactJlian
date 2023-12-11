import React from 'react'

const Userfunc = (props) => {
    const {name,location}=props
  return (
    <div className='user-details'>
        <h2>{name}</h2>
        <h2>{location}</h2>
        <h2>contact number</h2>
        <h2>contact details</h2>      
    </div>
  )
}

export default Userfunc
