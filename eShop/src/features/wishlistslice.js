import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishBox: [],
    toggleWishList : false,
    totalPrice : 0,
    cartBox: [],
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addIntoWishList: (state, action) => {
            state.wishBox.push(action.payload)
            state.toggleWishList = true
            
        },
        removeIntoWishList: (state, action) => {
            const findIndex = state.wishBox.findIndex((item) => item.id === action.payload)
            state.wishBox.splice(findIndex,1)
            state.toggleWishList = false
        },
        // add into cart functions
        addIntoCart: (state, action) =>{
            let findCartItem = state.cartBox.findIndex((cart) => cart.id === action.payload?.id)
            console.log(findCartItem, 'cart index')
            if(findCartItem === -1){
                state.cartBox.push(action.payload)
                if(state?.totalPrice == 0){
                    state.totalPrice = action.payload?.price
                }else{
                    state.totalPrice = action.payload?.price + state.totalPrice
                }   
                console.log('cart if')
                
            }else{
                state.cartBox[findCartItem].quantity += action.payload?.quantity
                state.cartBox[findCartItem].finalPrice = state.cartBox[findCartItem].price * state.cartBox[findCartItem].quantity
                console.log(state.cartBox[findCartItem].price, 'product price')
                state.totalPrice = action.payload?.price + state.totalPrice
                console.log("cart else")
            }
            
            
            
        },
        removeIntoCart: (state, action) =>{
            if(state.cartBox.length > 1){
                const cartItem = state.cartBox.findIndex((cart) => cart.id === action.payload)
                state.totalPrice =  state.totalPrice - state.cartBox[cartItem]?.finalPrice;
                state.cartBox.splice(cartItem, 1)
            }else{
                state.totalPrice = 0
                state.cartBox.splice(0,1)
            }
            
            
        },

        // increase quantity
        increaseQuantity: (state, action) => {
            const findItem = state.cartBox.findIndex((cart) => cart.id === action.payload)
            state.cartBox[findItem].quantity++
            state.cartBox[findItem].finalPrice += state.cartBox[findItem].price
            state.totalPrice = state.totalPrice + state.cartBox[findItem].price
        },

        // decrease quantity
        decreaseQuantity: (state, action) => {
            const findItem = state.cartBox.findIndex((cart) => cart.id === action.payload)
            state.cartBox[findItem].quantity--
            state.cartBox[findItem].finalPrice -= state.cartBox[findItem].price
            state.totalPrice = state.totalPrice - state.cartBox[findItem].price
        },

        // remove all cart items
        clearAllCartItems: (state) => {
            state.cartBox = []
            state.totalPrice = 0
        }
    }

})
export const {addIntoWishList,
    removeIntoWishList,
    addIntoCart,
    removeIntoCart,
    increaseQuantity, 
    decreaseQuantity,
    clearAllCartItems
} = wishlistSlice.actions

export default wishlistSlice.reducer