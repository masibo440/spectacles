import axios from "axios";
import { useState } from "react"
import Navbar from "./Navbar";
import Footer from "./Footer";

const Addspecatcle = () => {

  // create hooks that will enable you to store diffrent data
  const[product_name, setProductName] = useState("");
  const[product_description, setProductDescription] = useState("");
  const[product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  // create three addtional hooks manage the state of your application when a person clicks the add product botton

  const[loading, setLoading] = useState("");
  const[message, setMessage] = useState("");
  const[error, setError] = useState("");

  // create function that wiil handle the submit event
  const submit = async (e) =>{
    // prevent the site from reloading
    e.preventDefault()
    // update the loading hook with message
    setLoading("please wait as we upload your product details...")

    // create a form data variable that wil hold all the datails from the hooks
    const data = new FormData()

    // append the information from the hooks
    data.append("product_name", product_name)
    data.append("product_description", product_description);
    data.append("product_cost", product_cost);
    data.append("product_photo", product_photo);

    try{
      const response = await axios.post("https://masibo.pythonanywhere.com/api/addproduct", data);
      
      setLoading("");
      setMessage("product added successfully")
       // set the timeout of the message
       setTimeout(() => {
        setMessage("");
      }, 8000)

      
      // clear the data on the other four hoooks
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("")
    }
    catch(error){
      setLoading("")
      setError("failed to add product please try again")

    }
  }
  return (
    <div className="row justify-content-center mt-4">
      <Navbar/>
      <div className="col-md-6 card shadow p-4">
        <form onSubmit={submit}>
           <h2>Add Product</h2>

           {loading}
           {message}
           {error}

           <input
            type="text"
            placeholder="Enter the product name"
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
            className="form-control"
            required /> <br />

            {/* {product_name} */}

            <textarea placeholder="Enter some description"
            className="form-control"
            value={product_description}
            onChange={(e) => setProductDescription(e.target.value)}
            required></textarea> <br />

            {/* {product_description} */}

            <input type="number"
            placeholder="Enter the price"
            value={product_cost}
            onChange={(e) => setProductCost(e.target.value)}
            className="form-control" /> <br />

            {/* {product_cost} */}


            <label>product photo</label>
            <input type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setProductPhoto(e.target.files[0])}
            required /> <br /> <br />

            <button type="Submit" className="btn btn-danger" >Add product</button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Addspecatcle

