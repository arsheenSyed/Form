import React from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import DynamicForm from "./DynamicForm";

class Form extends React.Component {
  // state = {
  //   isTrue: false,
  // };


  // render() {
  //   if (this.state.isTrue) {
  //     return <SignUp />;
  //   } else {
  //     return <LogIn />;
  //   }
  // }

  render() {
    return (
      <DynamicForm/>
    )
  }

}

export default Form;
