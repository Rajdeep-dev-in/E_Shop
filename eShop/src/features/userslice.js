import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user :  localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    userDetails: []
    //openModel: false

}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) =>{
            console.log(action)
            const userData = {
                fullName: action.payload.fullName,
                email: action.payload.email,
                password: action.payload.password
            }
            localStorage.setItem("user", JSON.stringify(userData))
            //state.openModel = false
        },
        getUserData: (state, action) =>{
            state.user = JSON.parse(localStorage.getItem("user"))
        },
        logOutUser: (state, action) =>{
            localStorage.removeItem("user")
            state.user = null
        },
        addUserFullDetails: (state, action) =>{
            state.userDetails.push(action.payload)
        },
        clearUserFullDetails: (state, action) =>{
            state.userDetails = []
        }
    }
})

export const { addUser,getUserData, logOutUser, addUserFullDetails, clearUserFullDetails} = userSlice.actions;
export default userSlice.reducer