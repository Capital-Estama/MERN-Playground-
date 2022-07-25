import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';
import Err from './Err';



const People = (props) => {

    const { id } = useParams();
    // emty obj
    const [response, setresponse] = useState({}); 
    const [err, seterr] = useState(false);
    const navigate = useNavigate();

    //https://swapi.dev/api
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setresponse(response.data);
            })
            // broken Todo: move to seprate Func
            .catch( (err) => {
                navigate("/err"); 
            });
    }, [id]);


    

    { JSON.stringify(response) };
    if (err == true) {
        <Err />
    } else {
        return (
            <div>

          <table className="table table-bordered table-dark">
                <tr><td>  <h1>{response.name}</h1> </td></tr>
                <tr><td>  <p>Birth Year: {response.birth_year}</p> </td></tr>
                <tr><td>  <p>Height: {response.height} cm</p> </td></tr>
                <tr><td>  <p>Mass: {response.mass}</p>   </td> </tr>
                <tr><td>  <p>Hair Color: {response.hair_color}</p>    </td></tr>
                <tr><td>  <p>Skin Color: {response.skin_color}</p>    </td>  </tr>
          </table>

            </div>
        )
    }
}

export default People;