import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function Createcat() {

  const navigate = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    await axios.post("http://localhost:5000/category", form)
    .then((res) =>{
      if(res?.data?.message === "fill the title"){
        alert(res?.data?.message)
      }else if(res?.data?.message === "category created"){
        alert(res?.data?.message)
        navigate("/")
      }
    })

  }
  return (
    <div className="create">
         <form onSubmit={(e) => handleSubmit(e)}>
         <div>
            <label htmlFor="" className="text-white fw-bold form-label">Title</label>
            <input type="text" name='title' className='form-control' />
          </div>

          <button type='submit' className='btn btn-md my-3 btn-success'>Create Category</button>

         </form>
    </div>
  )
}

export default Createcat