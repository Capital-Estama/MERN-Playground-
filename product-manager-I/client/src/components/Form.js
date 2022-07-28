import React, { useState } from "react";
import axios from "axios";
// import React, { useEffect, useState } from "react";


const Form = props => {

  const { products, setProducts } = props;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  
  const [errors, setErrors] = useState({});

  const submitHandler = e => {

    e.preventDefault()
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description
      })
      .then(res => {
        
        setTitle("");
        setPrice("");
        setDescription("");
        
        setErrors({});
        setProducts([...products, res.data]);
      })
      .catch(err => {
        setErrors(err.response.data.error.errors)
      })
  }

  return (
    <div  >
      <h1>Product Manager</h1>
      <form onSubmit={submitHandler}>

        {errors.title ? ( <p className="text-danger">{errors.title.message}</p>  ) : null}
        <div >
          <label htmlFor="Title">Title </label>
          <input className="form-control" onChange={e => setTitle(e.target.value)} type="text" value={title} />
        </div>  

         {errors.price ? ( <p className="text-danger">{errors.price.message}</p> ) : null}
        <div >
          < label htmlFor="Price"> Price</label>
          <input className="form-control" onChange={e => setPrice(e.target.value)}  type="number" value={price}  />
        </div>
      
        {errors.description ? ( <p className="text-danger">{errors.description.message}</p>  ) : null}
        <div >
          <label htmlFor="Description">Description</label>
          <input className="form-control" onChange={e => setDescription(e.target.value)} type="text"  value={description}  />
        </div>

        <button className="btn btn-success m-3" type="submit">
          Create
        </button>

      </form>
    </div>
  )
}

export default Form
