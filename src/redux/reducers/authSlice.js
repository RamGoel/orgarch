import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[],
    role:'',

}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user=action.payload
        },
        setRole:(state, action)=>{
            state.role=action.payload
        }
    }
})



export const { setUser, setRole } = authSlice.actions
export default authSlice.reducer