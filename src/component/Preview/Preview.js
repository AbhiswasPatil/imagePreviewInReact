import React from "react";
import "./Preview.css";

const preview = (props) => {
  return (
    <div className="preview">
      <img alt={props.item.title} src={props.item.previewImage} />
      <div className="info">{props.item.title}</div>
    </div>
  );
};

export default preview;
