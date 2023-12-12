// imports

// controllers

const getAllTasks = async (req, res) => {
    try {
        await res.status(200).json({ msg: 'get all tasks' })
    } catch (error) {
        res.status(500).json({
            msg: 'Something went wrong. Please try again later.',
        })
    }
}
const createTask = async (req, res) => {
    try {
        await res.status(200).json({ msg: 'create task' })
    } catch (error) {
        res.status(500).json({
            msg: 'Something went wrong. Please try again later.',
        })
    }
}
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
