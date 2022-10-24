import os from "os"
import path from "path"
import fs from "fs"
import events from "events"
import http from "http"
import dotenv from "dotenv"
import express from "express"
import cors from "cors"

dotenv.config()


const app = express()

app.use(express.json())

app.use(cors())

app.use(express.urlencoded({extended: true}))

app.get("/getdata", (req, res) =>{
    
} )


app.listen(process.env.PORT || 8000, () =>{
    console.log(`listening of port ${process.env.PORT}`)
})



