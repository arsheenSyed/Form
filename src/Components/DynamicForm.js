import React from "react";

class DynamicForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isTrue: false,
            type: "text"
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
  

    handleClick(e) {
        e.preventDefault();
        this.setState((prevState) => {

            return { isTrue: prevState.isTrue === false ? true : false }

        })


    }


    render() {
        if (this.state.isTrue) {


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
                              <a href="#" className="forgotpassword">Forgot Password</a>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />


                        </div>

                        <div className="form-group">
                            <a href="#" onClick={this.handleClick}>Login</a>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            )

        } else {
            return (
                <div className="login p-5">
                    <h3>Login</h3>

                    <hr className="light" />
                    <form className="pt-3">
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
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />

                            <a href="#" className="forgotpassword">Forgot Password</a>
                        </div>

                        <div className="form-group">
                            <a
                                href="#"
                                styles={"fontSize: 12px;"}
                                onClick={this.handleClick}
                            >
                                SignUp
                            </a>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            )
        }

    }
}

export default DynamicForm;