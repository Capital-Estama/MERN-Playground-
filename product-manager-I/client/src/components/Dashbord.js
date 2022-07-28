import { useEffect, useState } from "react"
import axios from "axios"

import Products from "./Products"
import Form from "./Form"

const Dashbord = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    
    <div className="row">

      <div className="col">
        <Form products={products} setProducts={setProducts} />
      </div>

     <div className="col">
        <Products products={products} setProducts={setProducts} />
     </div>
     
   </div>
  )
};

export default Dashbord
