import React from "react";
import helpme from "../../assets/images/helpme.png";
function HelpMe() {
  return (
    <div className="contactHelp">
      <img
       className="helpmeimg"
        src={helpme}
        alt="help"
      />
      <div
       className="helpmetxt"
      >
        <p>في حال كنت </p> تواجه مشاكل في برامجك
        <p> التدريبية، تواصل مع فريق الدعم</p>
      </div>
      <p className="btnhelp">تواصل معنا</p>
    </div>
  );
}

export default HelpMe;
