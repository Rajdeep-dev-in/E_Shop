import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderData : []
}
export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrderList: (state, action) =>{
            state.orderData.push(action.payload)
        }
    }
})

export const {addOrderList} = orderSlice.actions;
export default orderSlice.reducer;