import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import User from "./Routes/User.js"
import Article from "./Routes/Articles.js"

dotenv.config()


const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(User)
app.use(Article)



app.listen(process.env.PORT || 8000, () =>{
    console.log(`listening of port ${process.env.PORT}`)
})



