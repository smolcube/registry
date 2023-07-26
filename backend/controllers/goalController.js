
const asyncHandler = require('express-async-handler');

const Goal = require("../models/goalsModel");

// @desc Get goals
// @route GET /api/main
// @access private

const getGoals = asyncHandler (async (req, res)=>{
    const goals = await Goal.find()
    res.status(200).json(goals)

})

// @desc Post goals
// @route POST /api/main
// @access private

const postGoals = asyncHandler(async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add text')
    } 
    const goal = await Goal.create({
        text : req.body.text 
    })

    res.status(200).json(goal)
})

// @desc Put goal
// @route PUT /api/main/:id
// @access private

const updateGoals = asyncHandler( async (req, res)=>{
    const goal = await Goal.findById(req.params.id)
     if(!goal){
        res.status(400);
        throw new Error('Goal not found')
     }
     const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body)

     res.status(200).json(updatedGoal);
})

// @desc Delete goal
// @route DELETE /api/main/:id
// @access private

const deleteGoals = asyncHandler( async (req, res)=>{

    const goal = await Goal.findById(req.params.id)
     if(!goal){
        res.status(400);
        throw new Error('Goal not found')
     }
    await Goal.deleteOne()
    res.status(200).json({ _id: req.params.id },'Goal is deleted')
})

module.exports = {
    getGoals,
    postGoals,
    updateGoals,
    deleteGoals

}