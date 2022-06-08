import React from "react";

class SignUp extends React.Component {
  render() {
    return (
      <div className="signup p-5" styles={"padding: 15px"}>
        <h3>SignUp</h3>

        <hr className="light" />
        <form className="pt-5">
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />

<div className="form-group">
            <a href="#">Login</a>
          </div>
          </div>

          <div className="form-group">
            <a href="#">Login</a>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
