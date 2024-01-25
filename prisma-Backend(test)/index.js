// Api formation and cors option 
const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')

require('dotenv').config()
const app = express()

// Remember to add your host website domain in place of * in origin
var corsOptions = {
    origin: '*',
}

// regular middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//cookie middleware
app.use(cookieParser())

const userRouter = require('./routes/userRoutes')

app.use('/api', userRouter)


app.get('/', (req, res)=> {
    res.send("Hello World")
})

app.listen(2000, ()=>{
    console.log("Server is running on port 2000");
})