import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    login : false,
    userData : {},
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        checkLogin: (state, action) =>{
            state.login = true
        },
        userInfo: (state, action) =>{
            state.userData = action.payload
        },
        logout: (state, action) =>{
            state.login = false
        }
    }
})

export default UserSlice.reducer
export const {checkLogin, userInfo, logout} = UserSlice.actions