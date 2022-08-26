import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import goalService from "./goalsService";


const initialState={
    goals:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}
//Create new Goal
export const createGoal=createAsyncThunk("goals/addgoal",async(goalData,thunkAPI)=>{
    try{
        const token=thunkAPI.getState().auth.user.token
        
  return await goalService.createGoal(goalData,token)
    }
    catch(error){
   const message=(error.response&&error.response.data&&error.response.data.message)||error.message||error.toString()
   return thunkAPI.rejectWithValue(message)
    }


})
//Create delete Goal
export const deleteGoal=createAsyncThunk("goals/deletegoal",async(id,thunkAPI)=>{
    try{
        const token=thunkAPI.getState().auth.user.token
        
  return await goalService.deleteGoals(id,token)
    }
    catch(error){
   const message=(error.response&&error.response.data&&error.response.data.message)||error.message||error.toString()
   return thunkAPI.rejectWithValue(message)
    }


})
//Get User Gaols
export const getGoals=createAsyncThunk("goals/getAll",async(_,thunkAPI)=>{
    try{
        const token=thunkAPI.getState().auth.user.token
        
  return await goalService.getGoals(token)
    }
    catch(error){
   const message=(error.response&&error.response.data&&error.response.data.message)||error.message||error.toString()
   return thunkAPI.rejectWithValue(message)
    }
})
export const goalSlice=createSlice({
    name:"goal",
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createGoal.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createGoal.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.goals.push(action.payload)

        })
        .addCase(createGoal.rejected,(state,action)=>{
         
            state.isLoading=false
            state.isError=true
            state.message=action.payload

        })
        .addCase(getGoals.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getGoals.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.goals=action.payload

        })
        .addCase(getGoals.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload

        })
        .addCase(deleteGoal.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(deleteGoal.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.goals=state.goals.filter(e=>e._id!=action.payload.id)

        })
        .addCase(deleteGoal.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload

        })
    }


})

export const {reset}=goalSlice.actions
export default goalSlice.reducer