const express = require('express')
const dotenv = require('dotenv')
const app = express()
const users = require('./src/routes/userRoute')
const handleConnecttoDb = require('./src/db/connectDb')
const errorMiddleware = require('./src/middleware/errorMiddleware')
dotenv.config()

const PORT = process.env.PORT || 8000

// Middleware
app.use(express.json())
app.use('/api/v1', users)
app.use(errorMiddleware)

// DB connect
handleConnecttoDb()
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err))

// Server start
app.listen(PORT, '0.0.0.0', () => {
    console.log('Hello Application running on port ', PORT)
})
