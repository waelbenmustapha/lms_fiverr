import React from "react";
import "./callUsBox.css";

function CallUsBox({ title, description }) {
  return (
    <div className="call-us">
      <p className="title mb-20">{title}</p>
      <p className="description mb-20">{description}</p>
      <button className="btn-call-us">تواصل معنا</button>
    </div>
  );
}

export default CallUsBox;
