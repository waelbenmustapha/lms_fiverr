import React from "react";
import { Link } from "react-router-dom";
import helpme from "../../assets/images/helpme.png";
function HelpMe() {
  return (
    <div className="relative flex mb-[70px] mt-[22px] justify-center items-center  mr-[65px] bg-[#00ec8b] shadow-contect-help w-[250px] h-[310px] mediamax-767:w-max mediamax-767:p-[20px] mediamax-767:m-[50px] mediamax-767:h-[250px]  mediamax-1079:mb-[60px]  mediamax-1079:mt-[20px]  mediamax-1079:mr-[40px]  mediamax-1079:w-[210px]  mediamax-1079:h-[270px] mediamax-950:mb-[50px] mediamax-950:mt-[17px] mediamax-950:mr-[25px] mediamax-950:w-[190px] mediamax-950:h-[250px]">
      <img
        className="left-[20px] top-[30px] absolute mediamax-767:left-[10px] mediamax-767:top-[15px] mediamax-767:h-[40px] mediamax-767:w-[40px]"
        src={helpme}
        alt="help"
      />
      <div className="font-[bold] text-[16px] text-[#153c3f] mediamax-767:text-[13px] mediamax-767:mr-[10px] mediamax-1079:text-[14px]">
        <p>في حال كنت </p> تواجه مشاكل في برامجك
        <p> التدريبية، تواصل مع فريق الدعم</p>
      </div>
      <div className="flex flex-row justify-center items-center font-[bold] text-[14px] py-[17px] px-[38px] gap-[10px] text-white bottom-[16px] absolute w-[218px] h-[52px] bg-[#153c3f] shadow-help-btn mediamax-767:text-[10px] mediamax-767:py-[10px] mediamax-767:px-[20px] mediamax-767:bottom-[16px] mediamax-767:w-[120px] mediamax-767:h-[40px] mediamax-1079:text-[12px]  mediamax-1079:py-[15px]  mediamax-1079:gap-[10px]  mediamax-1079:bottom-[14px]  mediamax-1079:w-[180px]  mediamax-1079:h-[46px] mediamax-950:text-[11px] mediamax-950:py-[13px] mediamax-950:px-[30px] mediamax-950:gap-[10px] mediamax-950:bottom-[12px] mediamax-950:w-[160px] mediamax-950:h-[40px]">
        <Link to={"/contact-us"}>
          <span>تواصل معنا</span>
        </Link>
      </div>
    </div>
  );
}

export default HelpMe;
