
const asyncHandler = require('express-async-handler');

// @desc Get goals
// @route GET /api/main
// @access private

const getGoals = asyncHandler (async (req, res)=>{
    res.json({message: `Get page + controllers`})
})

// @desc Post goals
// @route POST /api/main
// @access private

const postGoals = asyncHandler(async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text')
    } 
    
    res.status(200).json({message: `Post page + controllers`})
})

// @desc Put goal
// @route PUT /api/main/:id
// @access private

const updateGoals = asyncHandler( async (req, res)=>{
    res.json({message: `Put page ${req.params.id}`})
})

// @desc Delete goal
// @route DELETE /api/main/:id
// @access private

const deleteGoals = asyncHandler( async (req, res)=>{
    res.json({message: `Delete page ${req.params.id}`})
})

module.exports = {
    getGoals,
    postGoals,
    updateGoals,
    deleteGoals

}