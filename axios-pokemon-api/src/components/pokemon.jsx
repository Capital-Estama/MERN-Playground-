import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Pokemon = props => {
//     //Note the second argument is an empty array.
//     const [responseData, setResponseData] = useState(null);
//     useEffect(()=>{
//         axios.get('http://www.example.com')
//             .then(response=>{setResponseData(response.data)})
//     }, []); 
//     return(
//         <div>
//             {responseData}
//         </div>
//     )
// }

// const Example = (props) => {
//     const [people, setPeople] = useState([]);
 
//     useEffect(() => {
//         fetch('https://swapi.dev/api/people/')
//             .then(response => response.json())
//             .then(response => setPeople(response.results))
//     }, []);
 
//     return (
//         <div>
//             {people.length > 0 && people.map((person, index)=>{
//                 return (<div key={index}>{person.name}</div>)
//             })}
//         </div>
//     );
// }
// export default Example;


// const fetchGet = () =>
//     axios
//         .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
//         .then((res) => {
//             const results = res.data.results;
//             return arr;
//         })
//         .catch((err) => err);
///



    // const pokemonList = items.map((i, key) => <li key={i}>{name}</li>);

    const [PokemonList, setPokemonList] = useState([]);

    useEffect( () => {
        
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res => setPokemonList(res.data.results))
        .catch(err => console.log(err))},
        []
    )

    return (
        <div className='text-center container-sm'>
          {/* disabling the button so we can just use useEffect */}
          {/* <button type="submit" onClick={getPokemon}>Fetch Pokemon</button> */}
    
          {/* map and plot all names */}
          {
            PokemonList.map((index, i) => {
              return <ul>
                        <li className='mt-3 list-group-item list-group-item-primary'  key={i}>{index.name}</li>
                     </ul>
            })
          }
    
        </div>
      );
    }

export default Pokemon;
