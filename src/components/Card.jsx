import { Button } from '@headlessui/react';
import React, { useState } from 'react';
import { useGetCartDataQuery } from '../redux/features/dataFacth/CartApi';
import { Link, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice/cartSlice';

export const Card = () => {

    const { data: carts, isLoading, error } = useGetCartDataQuery();
    const dispatch = useDispatch(); // Use Redux dispatch


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went worng.</p>;

    return (
        <div>
            <h1 className="text-center text-4xl font-bold mb-6">All Cards</h1>
            <section className="flex flex-wrap justify-evenly gap-5">
                {carts?.map((cart) => (
                    <div
                        key={cart.id}
                        className="border-2 border-sky-200 rounded-2xl p-6 w-80 shadow-lg hover:shadow-2xl transition-shadow"
                    >
                        <h1 className="text-3xl font-bold">{cart.name}</h1>
                        <h3 className="text-lg font-medium text-gray-600">Username: {cart.username}</h3>
                        <p className="text-sm text-gray-500">Email: {cart.email}</p>
                        <p className="text-sm text-gray-500">Phone: {cart.phone}</p>
                        <p className="text-sm text-gray-500">Website: {cart.website}</p>
                        <div className="flex justify-evenly mt-4">
                            <Link to={`/cards-details/${cart.id}`}>
                                <Button
                                    // onClick={navigate(`/cards-details/${cart.id}`)}
                                    className="inline-flex items-center gap-2 rounded-md bg-yellow-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-yellow-500">
                                    View Details
                                </Button>
                            </Link>

                            <Button
                                onClick={() => dispatch(addToCart(cart))} // Dispatch the action
                                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600">
                                Add to Cart
                            </Button>

                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};
