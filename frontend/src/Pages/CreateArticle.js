import React, { Component, useState } from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 
import axios from "axios"
import { useEffect } from 'react';

function CreateArticle(){
  const { quill, quillRef } = useQuill();

   const [desc, setDesc] = useState("")
   const [cat, setCat] = useState()


   if (quill) {
    quill.on('text-change', (delta, oldDelta, source) => {
   
      
   
      console.log(quill.root.innerHTML); // Get innerHTML using quill
     
    });
  }
  
      useEffect(() =>{
        axios.get("http://localhost:5000/category")
        .then((res) => setCat(res?.data?.cat))
        .catch((e) => console.log(e)) 
      }, [])
    
    return (
      <>
       <div className="article">
        <div className='w-25'>
            <label htmlFor="" className="form-label text-white fw-bold">Title</label>
            <input type="text" className="form-control" name='title' />
        </div>
    
        <div className='my-3 w-25'>
            <label htmlFor="" className="form-label d-block text-white fw-bold">Category</label>
            <select name="cat" className='form-control'>
                {cat?.map((c) =>(
                  <option key={c?.id} className='form-control' value={c?.name}>{c?.name}</option>
                ))}
                
            </select>
        </div>
    
        <div >
          <div ref={quillRef} />
        </div>

      <h1>{desc}</h1>
       </div>
      </>
    )
  }


export default CreateArticle