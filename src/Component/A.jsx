import React from "react";
import "../Component/A.css";
export default function A({ props }) {
  return (
    <div className="cont">
      <img src={props.image} alt="alt" width="200" height="200" />
      <p>{props.text}</p>
    </div>
  );
}
