import React from "react";

const Login = () => {
  return (
    <>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-outline-dark ms-auto"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          Sign in
        </button>

        {/* Modal*/}
        <div
          className="modal fade"
          id="loginModal"
          tabIndex="-1"
          aria-labelledby="loginModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginModalLabel">
                  Sign in
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
                    <label htmlFor="loginInputEmail1" className="form-label">
                      Email address{" "}
                      <span className="fw-bold fs-6 text-secondary">OR</span>{" "}
                      Username
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="loginInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="loginInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="loginInputPassword1"
                    />
                  </div>
                  {/* <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="loginCheck1"
                    />
                    <label className="form-check-label" htmlFor="loginCheck1">
                      I agree with the <span className="fw-bold text-secondary fs-6">PRIVACY POLICY</span>
                    </label>
                  </div> */}
                  <button
                    type="submit"
                    className="btn btn-outline-dark w-100 mt-2 mb-2"
                  >
                    Sign in
                  </button>
                  <button className="btn btn-dark w-100 my-2">
                    <span className="fa fa-google me-2"></span>Sign in with
                    Google
                  </button>
                  <button className="btn btn-dark w-100 mt-1">
                    <span className="fa fa-facebook me-2"></span>Sign in with
                    Facebook
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
