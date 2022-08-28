import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

import authService from "./authserver"

//Get user from localStorage
const user=JSON.parse(localStorage.getItem("User"))
const initialState={
    user:user?user:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}
//reducer is not for async call
//Register a User
export const register=createAsyncThunk("auth/register",async(user,thunkAPI)=>{
    try{
    return await authService.register(user)
    }
    catch(error){
     const message=(error.response&&error.response.data&&error.response.data.message)||error.message||error.toString()
     return thunkAPI.rejectWithValue(message)
    }

})
//Login a User
export const login=createAsyncThunk("auth/login",async(user,thunkAPI)=>{
    try{
    return await authService.login(user)
    }
    catch(error){
     const message=(error.response&&error.response.data&&error.response.data.message)||error.message||error.toString()
     return thunkAPI.rejectWithValue(message)
    }

})

export const logout=createAsyncThunk("auth/logout",async()=>{

    await authService.logout()
})

export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{

    reset:(state)=>{
        state.isError=false
        state.isSuccess=false
        state.isError=false
        state.message=""

    }

    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(register.fulfilled,(state,aciton)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=aciton.payload
        })
        .addCase(register.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
        .addCase(login.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(login.fulfilled,(state,aciton)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=aciton.payload
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
        .addCase(logout.fulfilled,(state)=>{
            state.user=null
        })
    
        

    }
    
})


export const {reset}=authSlice.actions
export default authSlice.reducer