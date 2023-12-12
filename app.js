// Imports
require('dotenv')

const express = require('express')
const taskRouter = require('./routes/task_routes')

const app = express()

// Routes
app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.use('/api/v1/tasks', taskRouter)

// server
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
