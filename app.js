// Imports
require('dotenv').config()

const express = require('express')
const taskRouter = require('./routes/task_routes')
const connectDB = require('./database/connect')

const app = express()

// Routes
app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.use('/api/v1/tasks', taskRouter)

// server
const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
