import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";



const Edit = () => {

  const { id } = useParams();

  const navigate = useNavigate();
  
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        setTitle(res.data.title)
        setPrice(res.data.price)
        setDescription(res.data.description)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const submitHandler = e => {
    e.preventDefault()
    axios
      .put(`http://localhost:8000/api/product/${id}`, {
        title,
        price,
        description
      })
      .then(res => {
        // navigate("/")
        navigate(`/product/${id}`)
        navigate("/")
      })
      .catch(err => {
        setErrors(err.response.data.error.errors)
      })
  }

  return (
    <div className="text-center w-50 p-3">
      <h1>Update Product </h1>
      <form onSubmit={submitHandler} >
        {errors.title ? ( <p className="text-danger">{errors.title.message}</p> ) : null}
        <div>
          <label htmlFor="Title">Title</label>
          <input onChange={e => setTitle(e.target.value)} type="text" value={title} className="form-control" />
        </div>

        {errors.price ? ( <p className="text-danger">{errors.price.message}</p> ) : null}
        <div >
          <label htmlFor="Title">Price</label>
          <input onChange={e => setPrice(e.target.value)} type="number" value={price} className="form-control" />
        </div>

        {errors.description ? ( <p className="text-danger">{errors.description.message}</p> ) : null}
        <div>
          <label htmlFor="Title" >Description</label>
          <input className="form-control" onChange={e => setDescription(e.target.value)} type="text" value={description} />
        </div>

        <button className="btn btn-primary m-3" type="submit">
          Update
        </button>
      </form>
    </div>
  )
}

export default Edit

//gg
