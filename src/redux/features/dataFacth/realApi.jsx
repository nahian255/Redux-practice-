
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const realApi = createApi({
    reducerPath: 'realApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getData: builder.query({
            query:()=>'/albums'
        })
    })

});

export const { useGetDataQuery } = realApi