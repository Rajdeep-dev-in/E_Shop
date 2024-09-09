import {configureStore} from '@reduxjs/toolkit'
import { productApi } from './services/productApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import  wishListReducer from './features/wishlistslice.js'
import userReducer from './features/userslice.js'

export const store = configureStore({
    reducer: {
        wishList: wishListReducer,
        user:  userReducer,
        [productApi.reducerPath] : productApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productApi.middleware)
})

setupListeners(store.dispatch)