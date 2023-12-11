import React from 'react'
import MenuItem from './MenuItem'

function MenuSection(props) {
    const {title,itemCards}=props
    console.log(title,"itemcards",itemCards)

    if(!itemCards){
        return (<div>

        </div>)
    }
  return (
    <div className='menu-section'>
        <div className='menu-section-heading'>
            <h2>{title}</h2>
        </div>
        <div className='menu-items'>
            {
                itemCards.map((val)=>{
                    const {id,name,description,itemAttribute:{vegClassifier:vegNonVeg},price}=val.card.info;
                   
                    return <MenuItem key={id} name={name} price={price} vegNonVeg={vegNonVeg}description={description}/>
                   
                })
            }
        </div>

    </div>
  )
}

export default MenuSection