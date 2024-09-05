import {configureStore} from '@reduxjs/toolkit'
import { productApi } from './services/productApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import  wishListReducer from './features/wishlistslice.js'

export const store = configureStore({
    reducer: {
        wishList: wishListReducer,
        [productApi.reducerPath] : productApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productApi.middleware)
})

setupListeners(store.dispatch)