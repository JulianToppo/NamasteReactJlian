import React from 'react'
import { imageDirectoryUrl } from '../utils/constants'

function MenuItem(props) {

    const { name, description, vegNonVeg, price, imageId } = props;
    // console.log(props)
    return (
        <div className='menu-item text-left py-3 shadow-md'>
            <button >{vegNonVeg == 'VEG' ? '🟩' : '🟥'}</button>
            <span className='flex justify-between'>
                <span className='w-8/12 p-2'>
                    <h4 className='font-medium'>{name}</h4>
                    <h5>₹{price / 100}</h5>
                    <h5>{!description ? "" : description}</h5>
                </span>
                <span className='w-4/12 p-2 flex'>
                    <span>{imageId && <img src={imageDirectoryUrl + imageId}></img>}</span>
                
                    <button className='bg-black text-white p-3 rounded-sm absolute'>Add +</button>
                </span>

            </span>

        </div>
    )
}

export default MenuItem