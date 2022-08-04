import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-dark fw-bold mb-4">About Us</h1>
              <p className="lead mb-4">
                Lorem impsum dolor sit amet consectetur adipisicing elit. Nemo molestiae earum rem doloremque, nihil delectus ullam eror consectetur? Dicta, non exercitationem in consectetur totam dolorum at voluptaste laudantium aliquam, officiis perspeciatis molestias reiciendis consequuntur ullam perferendis velit blanditiis distinctio assumenda a maxime reprehenderit atque.
              </p>
              <NavLink to="/contact" className="btn btn-outline-dark px-3">Contact Us</NavLink>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img src="https://svmsolutions.b-cdn.net/wp-content/uploads/2020/01/converting-about-us-page.jpg" alt="about-us" height="300px" width="500px"/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default About;