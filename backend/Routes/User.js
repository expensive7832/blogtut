import express from "express"
import formidable from "formidable"
import cloudinary from "cloudinary" 
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Db from "./../Db.js"
import mailer from "nodemailer"

dotenv.config()

const app = express.Router()

const transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "expensive7832@gmail.com", // generated ethereal user
    pass: "avusqativbccbkmm", // generated ethereal password
  },
})

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

app.post("/login", (req, res) =>{
  const form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) =>{
    const {pwd, email} = fields
    if(pwd === "" || email === ""){
      res.status(203).json({message: "input field cannot be empty"});

    }else{
      
      const sql = "SELECT * FROM users WHERE email = ?"
      Db.query(sql, [email], async(err, result) =>{
        if(err){
          console.log(err)
        }else{
          if(result[0] === undefined){
            res.status(203).json({message: "email not found"})
          }else{
           
           bcrypt.compare(pwd, result[0]?.pwd ,(err, rp) =>{
            if(err){
              console.log(err)
            }else{
             if(rp === true){
              const newToken = jwt.sign({signature: result[0]?.name }, process.env.TOKEN, {expiresIn: 60 * 60})
              const sql = "UPDATE users SET token = ? WHERE id = ?"
              Db.query(sql, [newToken, result[0]?.id], (err) =>{
                if(err){
                  console.log(err)
                }
              })
              
             res.status(200).json({message: "login successful", userInfo: {...result[0], token: newToken}})
             }else{
              res.status(203).json({message: "Invalid Credentials"})
             }
            }
           }  )
          }
        }
      })
    }
  })
})


app.post("/contact", (req, res) =>{
  const form = new formidable.IncomingForm()

  form.parse(req, async(err, fields, files) =>{
    const { name, email, subject, message } = fields
    if(name === "" || email === "" || subject === "" || message === ""){
     res.status(203).json({message: "enter your information"})

    }else{

     

      transporter.sendMail({
        from: `${name} <${email}>`,
        sender: email,
        to: "expensive7832@gmail.com",
        subject: subject, // Subject line
        text: message
      }, (err) =>{
        if(err){
          console.log(err)
        }else{
          res.status(200).json({message: "email sent successfully"})
        }
      })
    }
  })
})


export default app