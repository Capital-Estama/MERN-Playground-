import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

//gg
const Products = props => {

  const navigate = useNavigate();
  const { products, setProducts } = props;
  // const Del = `localhost:8000/api/product/${id}`;
  // const Del2 = `http://localhost:8000/api/product/${id}`;

  const handleDelete = id => {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then(res => { 
        const only = products.filter((products, idx) => {
          return id !== products._id
        })
        setProducts(only)
        //homepage <-> delete
        navigate("/")
      })
      .catch(err => console.log(err))
  }


  return (
    <div >
      <h1> All Products: </h1>
      <table className="table table-sm table-success">
          {products.map(product => (
            <tr  key={product._id}>
              <td>
                <Link to={`/product/${product._id}`}> {product.title}</Link>
              </td>
              <td className="table-danger">
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(product._id)} >
                    Delete
                </button>
              </td>
              <td>
                <Link to={`/edit/${product._id}`}>
                  <button type="button" className="btn btn-primary">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        
      </table>
    </div>
  )
}

export default Products

// array.map(function(currentValue, index, arr), thisValue)


// class App extends Component {
//   render() {
//       return (
//           <div className="container">
//               <header>
//                   <span className="icn-logo"><i className="material-icons">code</i></span>
//                   <ul className="main-nav">
//                       <li><Link to="/">Home</Link></li>
//                       <li><Link to="/about">About</Link></li>
//                       <li><Link to="/teachers">Teachers</Link></li>
//                       <li><Link to="/courses">Courses</Link></li>
//                   </ul>
//               </header>
//               <Route exact path="/" component={Home}/>
//               <Route path="/about" component={About}/>
//               <Route path="/teachers" component={Teachers}/>
//               <Route path="/courses" component={Course}/>
//           </div>
//       );
//   }
//   }
  
//   export default App;

// const Update = (props) => {
//   const { id } = useParams();
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
  
//   useEffect(() => {
//       axios.get("http://localhost:8000/api/people/" + id)
//           .then(res => {
//               setFirstName(res.data.firstName);
//               setLastName(res.data.lastName);
//           })
//   }, []);
  
//   const updatePerson = e => {
//       e.preventDefault();
//       axios.put("http://localhost:8000/api/people/" + id, {
//           firstName,
//           lastName
//       })
//           .then(res => console.log(res))
//           .catch(err => console.error(err));
//   }


// Filter
// const evens = values.filter( val => val % 2 === 0 );
// const oFoods = groceries.filter( item => item.includes("o") );
