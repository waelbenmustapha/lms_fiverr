import React from "react";
import { Link } from "react-router-dom";
import "./callUsBox.css";

function CallUsBox({ title, description }) {
  return (
    <div className="call-us">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <Link to={"/contact-us"}>
        <button className="btn-call-us">تواصل معنا</button>
      </Link>
    </div>
  );
}

export default CallUsBox;
