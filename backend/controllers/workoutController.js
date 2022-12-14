const Workout = require('../models/workouts')


//get all workouts
const getAllWorkouts = async (req, res) => {
    try{
        const workouts = await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(workouts)
    } catch(err){
        res.status(400).json({error: err.message})
    }  
}


//get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params
    try{
        const workout = await Workout.findById(id)
        if (!workout)
            return(res.status(404).json({error: 'no such workout'}))

        res.status(200).json(workout)
    } catch(err){
        res.status(400).json({error: err.message})
    }  
}


//Create new workout
const createWorkout = async (req, res)=>{
    const {title, load, reps} = req.body
    // add doc to db
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }
    catch (err){
        res.status(400).json({error: err.message})
    }
}

//Delete workout
const deleteWorkout = async (req, res)=>{
    const {id} = req.params
    try {
        const workout = await Workout.findOneAndDelete({_id: id})
        if (!workout)
            return(res.status(404).json({error: 'no such workout'}))
        res.status(200).json(workout)

    } catch (err){
        res.status(400).json({error: err.message})
    }
}


//update a workout

const updateWorkout = async (req, res) =>{
    const {id} = req.params
    try{
        const workout = await Workout.findOneAndUpdate({_id: id},{...req.body})
        if (!workout)
            return(res.status(404).json({error: 'no such workout'}))
        res.status(200).json(workout)
    }catch (err){
        res.status(400).json({error: err.message})
    }
}
module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
}