import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';
import Err from './Err';

const Planets = (props) => {

  const { id } = useParams()
  const [response, setresponse] = useState("");
  const [err, seterr] = useState(false)

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
      .then(response => {
        setresponse(response.data);
      })
      .catch(error => {
        seterr(true);
      });
  }, [id]);


  { JSON.stringify(response) };

  if (err == true) {
    <Err />
  } else {
    return (
      <div className='m-3 text-center'>
        
        <table className="table table-bordered table-dark">
          <tr> <td>{response.name}</td></tr>
        
          <tr><td>Climate: {response.climate}</td></tr>
          <tr><td>Terrain: {response.terrain}</td> </tr>
          <tr><td>Surface Water: {response.surface_water}</td></tr>
          <tr><td>Population: {response.population}</td>  </tr>

        </table>
      </div>
    )
  }
}
export default Planets;