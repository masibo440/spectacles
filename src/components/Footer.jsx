const Footer = () => {
    return (
      <div>
        <section className="row mt-4 footer-background-color px-3 py-4">
          {/* About Us Section */}
          <div className="col-md-4 text-light">
            <h5 className="text-center text-info">About Us</h5>
            <p>
              Spectacles come in various types. We perform comprehensive eye disease scanning before any treatment or assigning spectacles.
            </p>
            <p>
              Eye diseases are never assumed — we offer free consultation and scanning. We also provide optical engineering courses for students passionate about studying this field.
            </p>
          </div>
  
          {/* Contact Form */}
          <div className="col-md-4 text-light">
            <h5 className="text-center text-info">Reach Us Out</h5>
            <input className="form-control mb-2" type="email" placeholder="Enter your email" />
            <textarea className="form-control mb-2" rows="5" placeholder="Leave a comment"></textarea>
            <input type="submit" value="Send Message" className="btn btn-primary w-100" />
          </div>
  
          {/* Social Media and Extra Info */}
          <div className="col-md-4 text-light text-center">
            <h5 className="text-info">Connect With Us</h5>
            <div className="mb-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-2">
                <img src="images/facebook.jpg" alt="Facebook" className="socialspictures" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="images/instagram.jpg" alt="Instagram" className="socialspictures" />
              </a>
            </div>
            <p className="text-light">
              Spectacles come in different sizes and types depending on the diagnosis. We offer spectacles ranging from 0% to 100% lens strength.
            </p>
            <p className="text-warning fw-bold">WE TREAT BUT GOD HEALS</p>
          </div>
        </section>
  
        {/* Bottom Footer */}
        <footer className="text-black text-center p-3 myfooter">
          <small>
            Developed by Glenn Masibo &copy; 2025. All rights reserved. Reach me at <a href="tel:0758770667" className="text-light text-decoration-none">0758770667</a>
          </small>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  