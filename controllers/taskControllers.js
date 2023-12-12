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

const getSingleTask = async (req, res) => {
    try {
        await res.status(200).json({ msg: 'get single tasks' })
    } catch (error) {
        res.status(500).json({
            msg: 'Something went wrong. Please try again later.',
        })
    }
}
const updateTask = async (req, res) => {
    try {
        await res.status(200).json({ msg: 'update a task' })
    } catch (error) {
        res.status(500).json({
            msg: 'Something went wrong. Please try again later.',
        })
    }
}
const deleteTask = async (req, res) => {
    try {
        await res.status(200).json({ msg: 'delete a task' })
    } catch (error) {
        res.status(500).json({
            msg: 'Something went wrong. Please try again later.',
        })
    }
}

module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask,
}
