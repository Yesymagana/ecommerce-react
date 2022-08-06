import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Questions?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src="https://us.123rf.com/450wm/christianchan/christianchan1906/christianchan190601499/124449805-contact-methods-close-up-of-a-phone-email-chat-and-post-icons-wooden-block-.jpg?ver=6"
              alt="contact-us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label for="contactForm" className="form-label">
                  Full Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contactForm"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-3">
                <label for="contactFormControlInput1" className="form-label">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="contactFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="contactFormControlTextarea1" className="form-label">
                  Message:
                </label>
                <textarea
                  className="form-control"
                  id="contactFormControlTextarea1"
                  rows="5"
                ></textarea>
                <button type="submit" className="btn btn-outline-dark my-4">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
