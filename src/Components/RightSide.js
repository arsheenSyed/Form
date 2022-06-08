import React from "react";
import Form from "./Form";
class RightSide extends React.Component {
  render() {
    return (
      <div className="col-md-6 right">
        <Form signUp={false} />
      </div>
    );
  }
}

export default RightSide;
