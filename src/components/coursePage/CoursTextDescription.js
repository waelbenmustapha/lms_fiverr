import React from "react";

function CoursTextDescription({text}) {
  return (
    <div className="coursetext" style={{ flex:1,paddingLeft:"60px"}}>
      <div className="dotsandtext">
        <p style={{ fontFamily: "bold" }}>مقدمة عن المحاضرة</p>
        <div className="smallDot"></div>
        <p>نص المحاضرة</p>
        <div className="smallDot"></div>
        <p>الأسئلة الشائعة</p>
      </div>
      <div className="bigBar">
        <div className="smallBar"></div>
      </div>
      <div className="contentdescription"><p style={{ lineHeight: "120%" }}>
        {text}
      </p>
      </div>
    </div>
  );
}

export default CoursTextDescription;
