// imports
const asyncWrapper = require('../middleware/asyncWrapper')
const mongoose = require('mongoose')
const Tasks = require('../database/models/Tasks')
// controllers

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Tasks.find({})
    res.status(200).json({ tasks })
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Tasks.create(req.body)
    res.status(200).json({ task })
})

const getSingleTask = asyncWrapper(async (req, res) => {
    const { id: task_ID } = req.params
    const task = await Tasks.findOne({ _id: task_ID })

    if (!task) {
        return res.status(404).json({ msg: 'Task not found' })
    }
    res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
    const { id: task_ID } = req.params
    const task = await Tasks.findOneAndUpdate({ _id: task_ID }, req.body, {
        new: true,
    })
    if (!task) {
        return res.status(404).json({ msg: 'Task not found' })
    }
    res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: task_ID } = req.params
    const task = await Tasks.findOneAndDelete({ _id: task_ID })
    if (!task) {
        return res.status(404).json({ msg: 'Task not found' })
    }
    res.status(200).json({ task })
})

module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask,
}
