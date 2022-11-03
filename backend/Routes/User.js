import express from "express"
import formidable from "formidable"
import cloudinary from "cloudinary" 
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Db from "./../Db.js"
dotenv.config()

const app = express.Router()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
  secure: true
})


app.post("/signup", async(req, res) =>{

    const form = new formidable.IncomingForm()
  
    form.parse(req, async(err, fields, files) =>{
        const {email, myname, pwd} = fields;
        const {photo} = files
      if(err){
        console.log(err)
      }else{
       if(email === "" || myname === "" || pwd === ""){
        res.status(203).json({message: "input field cannot be empty"});

       }else if(photo?.originalFilename === ""){
        res.status(203).json({message: "photo is required"})

       }else{
        await cloudinary?.v2?.uploader?.upload(photo?.filepath, {folder: "blog/profile"}, async(err, result) =>{
          if(err){
            console.log(err)
          }else{
            const imgurl = result?.secure_url;
            const imgId = result?.public_id;
            const token = jwt.sign({signature: myname }, process.env.TOKEN, {expiresIn: 60 * 60})
            const hashAlg =  await bcrypt?.genSalt()
       
            await bcrypt?.hash(pwd, hashAlg, (err, newPwd) =>{
              if(err){
                console.log(err)
              }else{
                const sql  = "INSERT INTO users (name, email, pwd, photo, photoId, token) VALUES (?,?,?,?,?,?)"
                Db.query(sql, [myname, email, newPwd, imgurl, imgId, token], (err) =>{
                  if(err){
                    console.log(err)
                  }else{
                    res.status(200).json({message: "Account Successfully Created"})
                  }
                })
              }
            })
          }
        })


        


       }
      }
    })
  
       
  } )


export default app