import React from "react";
import "./Item.css";
const item = (props) => {
  return (
    <div className={props.class} onClick={props.clicked}>
      <img alt={props.title} src={props.previewImage} />
      <div className="info">{props.title}</div>
    </div>
  );
};

export default item;
