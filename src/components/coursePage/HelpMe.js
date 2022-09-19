import React from "react";
import { Link } from "react-router-dom";
import helpme from "../../assets/images/helpme.png";
function HelpMe() {
  return (
    <div className="relative contactHelp">
      <img className="helpmeimg" src={helpme} alt="help" />
      <div className="helpmetxt">
        <p>في حال كنت </p> تواجه مشاكل في برامجك
        <p> التدريبية، تواصل مع فريق الدعم</p>
      </div>
      <div className="btnhelp">
        <Link to={"/contact-us"}>
          <span>تواصل معنا</span>
        </Link>
      </div>
    </div>
  );
}

export default HelpMe;
