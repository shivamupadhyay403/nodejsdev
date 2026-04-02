const express = require('express')
const dotenv = require('dotenv')
const app = express()

const users = require('./src/routes/userRoute')
const errorHandler = require('./src/handlers/errorHandler')
const successHandler = require('./src/handlers/successHandler')
const handleConnecttoDb = require('./src/db/connectDb')

dotenv.config()

const PORT = process.env.PORT || 8000

// Middleware
app.use(express.json())
app.use('/api/v1', users)

// DB connect
handleConnecttoDb()
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err))

// Server start
app.listen(PORT, '0.0.0.0', () => {
    console.log('Hello Application running on port ', PORT)
})
