import axios from "axios";

const API_URL=`/api/goals/`


//create new Goal

const createGoal=async(goalData,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response=await axios.post(API_URL,goalData,config)
    return response.data
}
//getGoal
const getGoals=async(token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response=await axios.get(API_URL,config)
    return response.data
}

//Delete goals
const deleteGoals=async(goalIid,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response=await axios.delete(API_URL + goalIid,config)
    return response.data
}
//updatgegoal
const updateGoals=async(goalData,token)=>{
    const {_id}=goalData
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response=await axios.put(API_URL + _id,goalData,config)
    return response.data
}

const goalService={
    createGoal,
    getGoals,
    deleteGoals,
    updateGoals
}
export default goalService