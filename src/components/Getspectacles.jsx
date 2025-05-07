import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import ImageCarousel from './Carousel';
import Navbar from './Navbar';
const Getspectacles = () => {

  // create hooks 
  const [products, setProducts] = useState([]);// this use state hook contains an empty array
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  // create the navigate hook that will help you to navigate to the mpesa page when the pachase button is picked
  const navigate = useNavigate();

  //specify the location of the image
  const img_url = "https://masibo.pythonanywhere.com/static/images/"

  // create a function that wii hundle the get method(operation)
  const getproducts = async () =>{
    //update loading hook witt a message
    setLoading("Please wait as we retrive the products...")
    try{
      //hundle the response given from pythonanywhere
      const response = await axios.get("https://masibo.pythonanywhere.com/api/getproducts")

      // update the products hook with the product received from the api
      setProducts(response.data)

      // set the loading hook back to default
      setLoading("");
    }
    catch(error){
      // set the loading hook back to default
      setLoading("");

      // project an error message
      setError("There was an error encountered")

    }
  } //end getproducts function

  // below we shall use the useEffect to call our get product function.
  // use effect is a hook that applies new effects/changes to the user inetface after an action has happened.
  useEffect(
     ()=> {getproducts()},
     []); //dependency-this hook contains an empty array dependency to ensure it only runs once when the component (getporoducts component) renders.

     // Filtered products based on search
    const [search, setSearch] = useState("");
    const filtered_products = products.filter((item) =>
      item.product_name.toLowerCase().includes(search.toLowerCase())||
      item.product_description.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="row">

      <Navbar/>
      <ImageCarousel/>
      <h3 className="text-2xl font-bold text-gray-800 mt-6 flex items-center gap-3">
  <span className="text-3xl">👓</span>
  Available Products
  <span className="text-3xl">👓</span>
</h3>

      
<div className="row justify-content-center mt-3 mb-3">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* {search} */}
    </div>


      {/* bind loading na error */}
      {loading}
      {error}

      {filtered_products.map((product)=> (
        <div className="col-md-3 justify-content-center mb-4">
        {/* below div will carry the card that contains a single product */}
        <div className="card shadow">
            <img src={img_url + product.product_photo} className="product_img mt-4" alt="" />
            {/* below is the card body */}
            <div className="card-body">
              <h5 className='mt-2'>{product.product_name}</h5>
              <p className='text-muted'>{product.product_description.slice(0, 50)}</p>
              <b className='text-warning'>{product.product_cost}</b> <br />
              <button className='btn btn-primary' onClick={()=> navigate("/mpesapayment", {state : {product}})}>Purchase Now</button>

            </div>
        </div>
        </div>
      ))} 

      <Footer/> 
    </div>
  )
}

export default Getspectacles
