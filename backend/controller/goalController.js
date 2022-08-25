const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");
const User=require("../models/userModels")
//@des Get goals
//@route GET /api/goals
//@access Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({user:req.user.id});
  res.status(200).json(goals);
});

//@des Set goals
//@route POST /api/goals
//@access Private

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text||!req.body.start||req.body.end) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
    start:req.body.start,
    end:req.body.end,
    user:req.user.id
  });
  res.status(200).json(goal);
});

//@des Updatet goals
//@route PUT /api/goals/:id
//@access Private

const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  //check for user
  if(!req.user){
    res.status(400)
    throw new Error("User not found")
  }
  //Make sure the logged in user matches the goal user
  if(goal.user.toString()!==req.user.id){
    res.status(401)
    throw new Error("User not authorized")

  }
  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateGoal);
});

//@des delete goals
//@route DELETE /api/goals/:id
//@access Private

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findByIdAndRemove(req.params.id);
  if(!goal){
    res.status(400)
    throw new Error("Goal not Found")
  }
  
  //check for user
  if(!req.user){
    res.status(400)
    throw new Error("User not found")
  }
  //Make sure the logged in user matches the goal user
  if(goal.user.toString()!==req.user.id){
    res.status(401)
    throw new Error("User not authorized")

  }
  
  res.status(200).json({id:req.params.id});
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
