import React from "react";

const Signup = () => {
  return (
    <div>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-outline-dark ms-2"
          data-bs-toggle="modal"
          data-bs-target="#signupModal"
        >
            Register
        </button>

        {/* Modal*/}
        <div
          className="modal fade"
          id="signupModal"
          tabIndex="-1"
          aria-labelledby="signupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="signupModalLabel">
                  Register
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                
                <form>
                  <div className="mb-3">
                    <label htmlFor="signupInput" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="signupInput"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="signupInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="signupInputPassword1"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="signupCheck1"
                    />
                    <label className="form-check-label" htmlFor="signupCheck1">
                    I agree with the <span className="fw-bold text-secondary fs-6">PRIVACY POLICY</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-dark w-100 mt-2 mb-2"
                  >
                    Register
                  </button>
                  <button className="btn btn-dark w-100 my-2">
                  <span className="fa fa-google me-2"></span>Sign up with Google
                </button>
                <button className="btn btn-dark w-100 mt-1">
                  <span className="fa fa-facebook me-2"></span>Sign up with
                  Facebook
                </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
