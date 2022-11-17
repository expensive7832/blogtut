import React, { useState } from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import axios from "axios"
import { useEffect } from 'react';
import { useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"

function CreateArticle() {
  const { quill, quillRef } = useQuill();

  const id = useSelector((state) => state?.user?.userData?.id)

  const navigate = useNavigate()

  const [photo, setPhoto] = useState("")
  const [title, setTitle] = useState("")
  const [choosenCat, setChoosenCat] = useState("")
  const [desc, setDesc] = useState("")
  const [cat, setCat] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/category")
      .then((res) => setCat(res?.data?.cat))
      .catch((e) => console.log(e))
  }, [])

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        setDesc(quill.root.innerHTML); // Get innerHTML using quill

      })
    }
  }, [quill])


  const handleSubmit =  async() => {

    const form = new FormData()

    form.append("title", title)
    form.append("photo", photo)
    form.append("cat", choosenCat)
    form.append("desc", desc)
    form.append("id", id)

    await axios.post("http://localhost:5000/create-article", form)
    .then((res) => {
      if(res?.data?.message === "field cannot be empty"){
        alert(res?.data?.message);

      }else if(res?.data?.message === "you need to authorize"){
        alert(res?.data?.message)
        navigate("/login");

      }else if(res?.data?.message === "Article Created Successfully"){
        alert(res?.data?.message)
        navigate("/")
      }
    })
    .catch((e) => console.log(e))
  }

  return (
    <>
      <div className="article">
        <div className='w-25'>
          <label htmlFor="" className="form-label text-white fw-bold">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" name='title' />
        </div>

        <div className='my-3 w-25'>
          <label htmlFor="" className="form-label d-block text-white fw-bold">Category</label>
          <select name="cat" className='form-control' value={choosenCat} onChange={(e) => setChoosenCat(e.target.value)}>
            <option value="">select option</option>
            {cat?.map((c) => (
              <option key={c?.id} className='form-control' value={c?.id}>{c?.name}</option>
            ))}

          </select>
        </div>

        <div >
          <div ref={quillRef} />
        </div>

        <div>
          <label htmlFor="" className='d-block form-label'>Photo</label>
          <input type="file" className="form-control" onChange={(e) => setPhoto(e.target.files[0])} />
        </div>
          
       <button onClick={handleSubmit} className="btn btn-md btn-info mt-3">Submit Article</button>
      </div>
    </>
  )
}


export default CreateArticle