import React from "react";
import "./truefalse.css";

const TrueFalse = (props) => {
  return <div className={"logo shadow " + props.sty}>{props.decision}</div>;
};
export default TrueFalse;
