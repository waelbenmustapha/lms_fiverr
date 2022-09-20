import React from "react";
import { Link } from "react-router-dom";
import helpme from "../../assets/images/helpme.png";
function HelpMe() {
  return (
    <div className="relative flex mb-[70px] mt-[22px] justify-center items-center  mr-[65px] bg-[#00ec8b] shadow-contect-help w-[250px] h-[310px]">
      <img className="left-[20px] top-[30px] absolute" src={helpme} alt="help" />
      <div className="font-[bold] text-[16px] text-[#153c3f] ">
        <p>في حال كنت </p> تواجه مشاكل في برامجك
        <p> التدريبية، تواصل مع فريق الدعم</p>
      </div>
      <div className="flex flex-row justify-center items-center font-[bold] text-[14px] py-[17px] px-[38px] gap-[10px] text-white bottom-[16px] absolute w-[218px] h-[52px] bg-[#153c3f] shadow-help-btn">
        <Link to={"/contact-us"}>
          <span>تواصل معنا</span>
        </Link>
      </div>
    </div>
  );
}

export default HelpMe;
