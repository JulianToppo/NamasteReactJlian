import React, { useState } from 'react'
import MenuItem from './MenuItem'

function MenuSection(props) {
    const { title, itemCards } = props
    console.log(title, "itemcards", itemCards)

    const [ showItemsList, setShowItemList ] = useState(false)

    if (!itemCards) {
        return (<div>

        </div>)
    }

    const onClickSectionHandler = (e) => {
        e.preventDefault();
        let list=!showItemsList
        setShowItemList(list)
    }

    return (
        <div className='menu-section w-6/12 text-center m-auto mb-4 shadow-xl'>
            <div className='menu-section-heading pb-2 shadow-lg flex justify-between' onClick={onClickSectionHandler}>
                <h2 className='font-bold'>{title + "(" + itemCards.length + ")"}</h2>
                <span>🔽</span>
            </div>
            <div className='menu-items'>
                {
                  showItemsList &&  itemCards.map((val) => {
                        console.log(val)
                        const { id, name, description, itemAttribute: { vegClassifier: vegNonVeg }, price, imageId } = val.card.info;

                        return <MenuItem key={id} imageId={imageId} name={name} price={price} vegNonVeg={vegNonVeg} description={description} />

                    })
                }
            </div>

        </div>
    )
}

export default MenuSection