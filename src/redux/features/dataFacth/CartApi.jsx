import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const cartApi = createApi({
    reducerPath: 'cartFetch',
    baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        // Existing endpoint to fetch all users
        getCartData: builder.query({
            query: () => '/users',
        }),
        // New endpoint to fetch a specific user by ID
        getUserById: builder.query({
            query: (id) => `/users/${id}`, // Dynamic URL with `id` as a parameter
        }),
    }),
});

export const {useGetCartDataQuery,useGetUserByIdQuery}= cartApi