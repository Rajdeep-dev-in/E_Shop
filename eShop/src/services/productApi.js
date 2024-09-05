import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.escuelajs.co/api/v1/'
    }),
    endpoints: (builder) => ({
        getAllCatagories : builder.query({
            query: () => 'categories'
        }) ,
        getProductsByName: builder.query({
            query: (payload) => `categories/${payload}/products`
        }),
        getProductById: builder.query({
            query: (payload) => `products/${payload}` 
        })
    })
})

export const {useGetAllCatagoriesQuery,
    useGetProductsByNameQuery,
    useGetProductByIdQuery

} = productApi