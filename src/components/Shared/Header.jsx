
import React from 'react'
import { Link, NavLink } from 'react-router'

export const Header = () => {
    return (
        <div className='bg-red-200 p-3 rounded-xl'>
            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <NavLink to={'/'} className="text-xl font-bold  "> Home</NavLink>
                    <NavLink to={'/cards'} className="text-xl font-bold "> Cart</NavLink>
                    <NavLink to={'/users'} className="text-xl font-bold"> User</NavLink>
                </div>
                <div>
                    <NavLink to={'/cards-items'} className="text-xl font-bold  "> Cart Store</NavLink>

                </div>
            </div>
        </div>
    )
}
