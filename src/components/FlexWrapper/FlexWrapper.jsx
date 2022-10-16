import React from "react";
import "./FlexWrapper.css";

function FlexWrapper(props) {
  return <div className="flex">{props.children}</div>;
}

export default FlexWrapper;