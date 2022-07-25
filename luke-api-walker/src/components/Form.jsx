import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
// import Error from './Error';

const Form = (props) => {
  // todo: 
  const [category, setCategory] = useState(null);  
  //Todo: fix
  const [id, setId] = useState("") 
  const options = [ 'people', 'planets']
  const navigate = useNavigate();

  // options.map( (categories, idx) => <option key={i} value={categories} >`/${cat}`</option>)
 
  // onChange
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Success");

    navigate(`/${category}/${id}`);
    console.log(category);
    console.log("##################");
    console.log(id);

  }

  return (
    <div className='mx-auto text-center'> 


      <form className='form-group' onSubmit={submitHandler}>

        <label  htmlFor='id' >Search for: </label>
        <select value={category}  onChange={(e) => setCategory(e.target.value) } >
          <option value={"people"}>People</option>
          <option value={"planets"}>Planets</option>
        </select>

        <label htmlFor='id'>ID: </label>
        <input type="number" value={id} id='id'  onChange={(e) => { setId(e.target.value) }}></input>

        <button   className='m-3 btn btn-primary' type='submit'>Search!</button>
      </form>

    </div>
  )
}

export default Form