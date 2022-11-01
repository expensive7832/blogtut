import express from "express"
import formidable from "formidable"
import cloudinary from "cloudinary" 

const app = express.Router()

app.post("/signup", (req, res) =>{

    const form = new formidable.IncomingForm()
  
    form.parse(req, async(err, fields, files) =>{
        const {email, myname, pwd} = fields;
        const {photo} = files
      if(err){
        console.log(err)
      }else{
       if(email === "" || myname === "" || pwd === ""){
        res.json({message: "input field cannot be empty"})
       }
      }
    })
  
       
  } )


export default app