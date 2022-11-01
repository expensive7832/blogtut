import express from "express"
import formidable from "formidable"
import cloudinary from "cloudinary" 

const app = express.Router()

app.post("/signup", async(req, res) =>{

    const form = new formidable.IncomingForm()
  
    form.parse(req, async(err, fields, files) =>{
        const {email, myname, pwd} = fields;
        const {photo} = files
      if(err){
        console.log(err)
      }else{
       if(email === "" || myname === "" || pwd === ""){
        res.json({message: "input field cannot be empty"});

       }else if(photo?.originalFilename === ""){
        res.json({message: "photo is required"})

       }else{
        await cloudinary?.v2?.uploader?.upload(photo?.filepath, {folder: "profile"})
       }
      }
    })
  
       
  } )


export default app