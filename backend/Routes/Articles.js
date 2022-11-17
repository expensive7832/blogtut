import express from "express"
import formidable from "formidable"
import Db from "./../Db.js"
import cloudinary from "cloudinary"
import dotenv from "dotenv"


dotenv.config()

const app = express.Router()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
    secure: true
})

app.post("/category", (req, res) => {
    const form = new formidable.IncomingForm()

    form.parse(req, async (err, fields, file) => {
        const { title } = fields
        if (title === "") {
            res.status(203).json({ message: "fill the title" })
        } else {
            const sql = "INSERT INTO category (name) VALUES(?)"
            Db.query(sql, [title], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.status(200).json({ message: "category created" })
                }
            })
        }
    })
})


app.get("/category", (req, res) => {
    const sql = "SELECT * FROM category"
    Db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ cat: result })
        }
    })
})

app.post("/create-article", (req, res) => {
    const form = new formidable.IncomingForm()

    form.parse(req, (err, fields, files) => {
        const { cat, title, desc, id } = fields
        const { photo } = files


        if (id === "undefined") {
            res.status(203).json({ message: "you need to authorize" })

        }

        if (cat === "" || title === "" || desc === "") {
            res.status(203).json({ message: "field cannot be empty" })
        }

        if (photo === undefined) {

            const sql = "INSERT INTO articles(title, body, catId, userId) VALUES(?,?,?,?)";
            Db.query(sql, [title, desc, cat, id], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.status(200).json({ message: "Article Created Successfully" })
                }
            })



        } else {

            cloudinary?.v2?.uploader?.upload(photo?.filepath, { folder: "blog/article" }, async (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    const imgurl = result?.secure_url;
                    const imgId = result?.public_id;
                    const sql = "INSERT INTO articles(title, body, catId, userId, img, imgId) VALUES(?,?,?,?,?,?)";
                    Db.query(sql, [title, desc, cat, id, imgurl, imgId], (err, result) => {
                        if (err) {
                            console.log(err)
                        } else {
                            res.status(200).json({ message: "Article Created Successfully" })
                        }
                    })


                }
            })

        }




    })
})

app.get("/getArticle", (req, res) => {
    const sql = "SELECT * FROM articles WHERE NOT catId = 2 LIMIT 5"
    Db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ article: result })
        }
    })

})

app.get("/centerArticle", (req, res) => {
    const sql = "SELECT * FROM articles"
    Db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {

            res?.json({ article: result[Math.ceil(Math.random() * result?.length - 1)] })
        }
    })

})


app.get("/getArticleFootball", (req, res) => {
    const sql = "SELECT * FROM articles WHERE catId = 2 LIMIT 5"
    Db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ article: result })
        }
    })

})

app.get("/details/:id", (req, res) => {
    const { id } = req.params

    const sql = "SELECT articles.title, articles.body, articles.catId, articles.userId, articles.dateCreated, articles.img, articles.imgId, users.name FROM articles INNER JOIN users ON users.id = articles.userId WHERE articles.id = ?"
    Db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ details: result[0] })
        }
    })
})


app.post("/others", (req, res) =>{
    const { id } = req.body
    const sql = "SELECT * FROM articles WHERE NOT catId = ? LIMIT 3"
    Db.query(sql, [id], (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.json({articles: result})
        }
    })
})


app.get("/latest/:id", (req, res) => {
    const { id } = req.params

    const sql = "SELECT * FROM articles WHERE NOT id = ? ORDER BY id DESC LIMIT 4"
    Db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ details: result })
        }
    })
})

export default app