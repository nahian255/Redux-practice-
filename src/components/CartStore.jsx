import React from 'react'
import { useGetCartDataQuery } from '../redux/features/dataFacth/CartApi'
import { useGetDataQuery } from '../redux/features/dataFacth/realApi'
import { useSelector } from 'react-redux';

export const CartStore = () => {

    // const { data:carts} = useGetCartDataQuery()
    // const {data:old }= useGetDataQuery()
    // console.log(carts, 'post')
    // console.log(old, 'old')

    const cartItems = useSelector((state) => state.cart); // Access the cart state
        console.log(cartItems,'in store')
    return (
        <div>
            <h1 className='text-3xl font-bold'> All Cart Here</h1>

        </div>
    )
}
