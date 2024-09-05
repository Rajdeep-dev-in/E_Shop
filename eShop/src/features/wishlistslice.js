import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishBox: [],
    toggleWishList : false,
    cartBox: [],
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addIntoWishList: (state, action) => {
            console.log(action.payload.id, 'print id')
            state.wishBox.push(action.payload)
            state.toggleWishList = true
            
        },
        removeIntoWishList: (state, action) => {
            // console.log(action, 'print action');
            
            // console.log(action.payload.id, 'helllo')
            const findIndex = state.wishBox.findIndex((item) => item.id === action.payload)
            console.log(findIndex, 'index')
            state.wishBox.splice(findIndex,1)
            state.toggleWishList = false
        }

    }

})
export const {addIntoWishList, removeIntoWishList} = wishlistSlice.actions

export default wishlistSlice.reducer