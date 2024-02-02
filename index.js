import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import AppRouter from './routers/router.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000


app.use(cors())
app.use(express.json())
app.use('/', AppRouter);


app.get('/',(req,res)=>{
    res.send('Welcome to User SignUp/Login Management system')
})

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`App is listening at ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error)
})