import React from 'react';
import { NavLink } from 'react-router-dom'; // Ensure you are using 'react-router-dom'

export const Header = () => {
    return (
        <div className="bg-red-200 p-3 rounded-xl">
            <div className="flex justify-between">
                <div className="flex gap-6">
                    <NavLink to="/" className={({ isActive }) => `text-xl font-bold p-2  ${isActive ? 'bg-red-400 rounded-xl' : ''}`} >
                        Home
                    </NavLink>
                    <NavLink
                        to="/cards"
                        className={({ isActive }) =>
                            `text-xl font-bold p-2 ${isActive ? 'bg-red-400 rounded-xl' : ''}`
                        }
                    >
                        Cart
                    </NavLink>
                    <NavLink
                        to="/users"
                        className={({ isActive }) =>
                            `text-xl font-bold p-2 ${isActive ? 'bg-red-400 rounded-xl' : ''}`
                        }
                    >
                        User
                    </NavLink>
                    <NavLink
                        to="/expense-tracker"
                        className={({ isActive }) =>
                            `text-xl font-bold p-2 ${isActive ? 'bg-red-400 rounded-xl' : ''}`
                        }
                    >
                        Expense Tracker
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/cards-items"
                        className={({ isActive }) =>
                            `text-xl font-bold ${isActive ? 'bg-red-400' : ''}`
                        }
                    >
                        Cart Store
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
