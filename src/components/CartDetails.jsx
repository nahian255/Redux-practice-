import React from 'react'
import { useParams } from 'react-router'
import { useGetUserByIdQuery } from '../redux/features/dataFacth/CartApi'
import { Button } from '@headlessui/react'

export const CartDetails = () => {

    const { id } = useParams()

    const { data:cart, isLoading, error } = useGetUserByIdQuery(id); // Use dynamic endpoint
    // console.log(data, 'details user')

    if (isLoading) return <p> Loadingg.....</p>

    return (
        <div> 
            <section className="mt-6">
                <div
                    className="border-2 border-sky-200 rounded-2xl p-3  shadow-lg hover:shadow-2xl transition-shadow"
                >
                    <h1 className="text-3xl font-bold">{cart.name}</h1>
                    <h3 className="text-lg font-medium text-gray-600">Username: {cart.username}</h3>
                    <p className="text-sm text-gray-500">Email: {cart.email}</p>
                    <p className="text-sm text-gray-500">Phone: {cart.phone}</p>
                    <p className="text-sm text-gray-500">Website: {cart.website}</p>
                    <div className="flex justify-evenly mt-4">

                        <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600">
                            Add to Cart
                        </Button>

                    </div>
                </div>
        </section>
        </div>
    )
}
