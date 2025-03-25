import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Signin = () => {
    // create different hooks that will help manage the different states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // set the states your application can be in

    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
      // after a successful login and verification of details, we need to redirect a user to a certain page
  // below is a hook for the same.


    const navigate = useNavigate()

    // a function to help us submitt the details to the backent api
    const submit = async (e) =>{
      e.preventDefault()

      setLoading("Please wait as we log you in...")

      // create a try and catch block that will add the details to the api
         // create a try and catch block that will add the details to the API
    try{
      // create an object that will be used to hold our data
      const data = new FormData();

      // the two datails goten from the input (hooks) onto the object
      data.append("email", email)
      data.append("password", password)

      // access the post meyhod from the axios liblary
      const response = await axios.post("https://masibo.pythonanywhere.com/api/signin", data)

      setLoading("");

      if (response.data.user){
        //save details of the user in local storage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        //redirect the person to another page
        //use the navigate hook to do this
        navigate("/")
      }
      else{
        // the user was not found, show a message
        setError(response.data.Message)
        // setError("the user is not found")
      }


      
    }
    catch(error){
      setLoading("");
      setError(error.response.data.Message)
      
    }

    }
  
  return (
    <div className='row justify-content-center mt-5'>
      <Navbar/>
      <div className="card shadow col-md-6 p-4">
      <h2>Sign In</h2>

      {error}

        <form onSubmit={submit}>
        <input 
        type="email"
        placeholder="Enter your email address here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control" />
        <br />
        {/* {email} */}
        <input 
        type="password"
        placeholder="Enter the password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control" /> <br /> <br />

        {/* {password} */}
        <button type="submit" className="btn btn-success">Sign In</button>
        </form>

      </div>
      <Footer/>
     
    </div>
  )
}

export default Signin

