import "./App.css";
import React, { useState } from "react";
import UserPage from "./Components/UserPage";
import RightSide from "./Components/RightSide";
class App extends React.Component {
  render() {
    return (
      <div>
        <UserPage />
      </div>
    );
  }
}

export default App;
