import mysql from "mysql"
import dotenv from "dotenv"

dotenv.config()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
})

db.connect((err) =>{
    if(err){
        console.log(err.message)
    }else{
        console.log("Database connected successfully")
    }
})

export default db