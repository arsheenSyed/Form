import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Form() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </div>
  );
}
