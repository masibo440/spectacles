
const Footer = () => {
    return (
    <div>
        <section className="row  mt-4 footer-background-color">
            <div className="col-md-4 text-left text-light">
                <h5 className="p-2 text-center text-info">About Us</h5>
                <p>Spectacles come in various type,we do every eye desease scanning before treatement or before being assigned any spectacles</p>
                <p>Eye desease are not assumed even on the start,consultation and scanning are offered for free,we also offer optical engineering for student who have the urge of studing this course</p>
                <br/>
            </div>
            <div className="col-md-4 text-light">
                <h5 className="p-2 text-center text-info">Reach Us Out</h5>
                <input className="form-control" type="email" placeholder="Enter your email"/>
                <br/>
                <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
                <br/>
                <input type="submit" value="Send Message" className="btn btn-primary"/>
            </div>
            <div className="col-md-4 ">
                <h4 className="text-center text-info">Connect With Us</h4>
                <br/>
                <a href="https://facebook.com">
                <img src="images/facebook.jpg" alt="" className="socialspictures"/>
                </a>
                <a href="https://instagram.com">
                <img src="images/instagram.jpg" alt="" className="socialspictures"/>
                </a>
                <p className="text-dark"> Spectacles come in diffrent sizes and also in accodance with the disease. We offer Spectacles with 0% lense to 100% lense</p>
                <p className="text-white">WE TREAT BUT GOD HEALS</p>
            </div>
        </section>
        <footer className="text-white text-center p-2 mt-2 bootom-footer">
                <h5>Developed by Glenn Masibo &copy; 2025.All rights reserved.Reach me out on 0758770667
                </h5>
        </footer>
    </div>
    );
    }
     
   
    export default Footer;
