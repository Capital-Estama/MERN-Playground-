import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Detail = props => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        setProduct(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleDelete = id => {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        console.log(res.data)
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="text-center m-3">
      <h1> {product.title}</h1>
      <h3> Price:${product.price}</h3>
      <p> Description: {product.description} </p>
          <div className="text-center">
              <button className="m-3 btn btn-danger" onClick={() => handleDelete(product._id)}>
                Delete
              </button>
              <Link to={"/"}>
                <button className="m-3 btn btn-primary">Dashbord</button>
              </Link>
          </div>
    </div>
  )
}

export default Detail

// useEffect(() => {
//   fetch('https://swapi.dev/api/people/')
//       .then(response => response.json())
//       .then(response => setPeople(response.results))
// }, []);