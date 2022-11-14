import express from "express"
import formidable from "formidable"
import Db from "./../Db.js"


const app = express.Router()

app.post("/category", (req, res) =>{
    const form = new formidable.IncomingForm()

    form.parse(req, async(err, fields, file) =>{
        const { title } = fields
        if(title === ""){
            res.status(203).json({message: "fill the title"})
        }else{
            const sql = "INSERT INTO category (name) VALUES(?)"
            Db.query(sql, [title], (err, result) => {
                if(err){
                    console.log(err)
                }else{
                    res.status(200).json({message: "category created"})
                }
            })
        }
    })
})


app.get("/category", (req, res) =>{
    const sql = "SELECT * FROM category"
    Db.query(sql, (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.json({cat:result})
        }
    })
})
export default app