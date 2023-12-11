// Imports

const express = require('express')
const app = express()

// Routes
app.get('/', (req, res) => {
    res.send('Hello, world!')
})

// server
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
