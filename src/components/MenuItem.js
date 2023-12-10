import React from 'react'

function MenuItem(props) {

    const{name,description,vegNonVeg,price}=props;
    return (
        <div className='menu-item'>

            <button>{vegNonVeg}</button>
            <h4>{name}</h4>
            <h5>₹{price}</h5>
            <h5>{!description?"":description}</h5>

            {/* {id+name+description+vegNonVeg+price} */}
            <hr></hr>
            </div>
  )
}

export default MenuItem