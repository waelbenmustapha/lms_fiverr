import React from "react";
import helpme from "../../assets/images/helpme.png";
function HelpMe() {
  return (
    <div className="contactHelp">
      <img
        style={{ left: "20px", top: "30px", position: "absolute" }}
        src={helpme}
        alt="help"
      />
      <div
        style={{
          fontFamily: "bold",
          fontSize: "16px",
          color: "#153C3F",
          marginRight: "15px",
        }}
      >
        <p>في حال كنت </p> تواجه مشاكل في برامجك
        <p> التدريبية، تواصل مع فريق الدعم</p>
      </div>
      <p className="btnhelp">تواصل معنا</p>
    </div>
  );
}

export default HelpMe;
