import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import CartItem from './CartItem'

const Cart = () => {

  let totalElements = useSelector((store) => store.cart.items)

  let dispatch = useDispatch();
  const clearCartOnclickHandler = (e) => {
    e.preventDefault();
    dispatch(clearCart());
  }
  return (
    <div className='w-6/12 m-auto p-5'>
      <div>
        <div className='text-2xl text-center'>Cart</div>
        <br></br>
        <div className='text-center border border-gray-900 p-3 m-3'>Total elem:{totalElements.length}</div>
        <span>
          <button className='p-4 m-4 bg-amber-500' onClick={clearCartOnclickHandler}>Clear Cart</button>
        </span>

      </div>
      <div>
        <div>{
          totalElements.map((val) => {
            
            return <CartItem key={val.name} name={val.name} description={val.description} vegNonVeg={val.vegNonVeg} price={val.price} imageId={val.imageId} />
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Cart
