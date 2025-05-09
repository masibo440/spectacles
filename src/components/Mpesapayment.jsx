import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

const Mpesapayment = () => {

    // we passed the state of our card from the component getproducts component
    //we shall use the uslocation hook to extract the diffrent details from the getproduct component
    const{product} = useLocation().state || {};

    //create use state hooks; phone number, message
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    //create a function that will hundle the payment
    const submit = async (e) => {
        e.preventDefault()

        setMessage("Please wait as we process your payment...")

        //crete a form data and add the phone
        const data= new FormData();

        data.append("phone", phone)
        //append
        // cost of the product
        data.append("amount", product.product_cost);

        //use axios to access the http method post
        const response = await axios.post("https://masibo.pythonanywhere.com/api/mpesa_payment", data)

        // update the message 
        setMessage(response.data.message)
    }

    // console.log(product.product_name);

  return (
    <div className='row justify-content-center mt-3'>
      <Navbar/>
        <h1 className='text-danger'>Lipa na Mpesa</h1>
        <div className="col-md-6 card shadow p-3">
          <b className='text-primary'>{message}</b>

        <h4>Product Name: <span className='text-primary'>{product.product_name}</span></h4>
        <form onSubmit={submit}>
        <h4>Price of the Product: <span className='text-primary'>{product.product_cost}</span></h4>
            
            <input 
            type="number"
            placeholder='Enter your mpesa number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='form-control' />
            <br />
            <br />
            {/* {phone} */}
            <button className='btn btn-success'>Make Payment</button>
        </form>
        </div>
    <Footer/>
    </div>
    
  )
}

export default Mpesapayment
