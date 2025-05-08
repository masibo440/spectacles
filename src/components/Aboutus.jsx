
import Footer from './Footer';
import Navbar from './Navbar';

 
const Aboutus = () => {
  return (
    <div className="row justify-content-center">
        <Navbar/>

 
        <h1 className='display-4 text-danger'>About Us</h1>

 
        <video
        src='videos/vid1.mp4'
        autoPlay
        muted
        loop
        className='w-50 mt-4'></video>
        <div className="col-md-6 justify-content-start">
            <h2 className='text-primary'>OFFICIALS:</h2>
            <ul className='text-danger' >
                <li>Glenn : CEO</li>
                <li>Kevin: COO</li>
                <li>Joseph: Member</li>
                <li>Faith: Member</li>
            </ul>
            <p>We belive in a better sight so that you can have a brighter future. We are located in Eldoret Opposite Knowledge spring school of optical engineering.Come visit us and enjoy your the rest of your life.....WELCOME</p>

 
            <h3 className='text-primary'>Over 30+ services, over 1200+ customers served...</h3>

 
           
        </div>
        <Footer/>
    </div>
  )
}

 
export default Aboutus;
