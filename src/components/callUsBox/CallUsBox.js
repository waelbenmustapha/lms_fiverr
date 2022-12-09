import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as GroupSVG1 } from "../../assets/svg/group-question.svg";
import { ReactComponent as GroupSVG2 } from "../../assets/svg/group-question2.svg";

function CallUsBox({ title, description }) {
  return (
    <div className="relative bg-[#E2DEFA] w-full py-[100px] px-[20px] mediamax-1079:py-[70px] mediamax-900:py-[50px]">
      <GroupSVG2 className="absolute left-0 top-0 h-full w-fit mediamax-767:hidden" />
      <GroupSVG1 className="absolute right-0 top-0 h-full w-fit mediamax-650:hidden" />
      <div className="relative flex flex-col justify-center items-center text-center">
        <div className="max-w-[650px] ">
          <p className="text-[64px] font-bold text-blue mb-[10px] mediamax-1079:text-[48px] mediamax-900:text-[36px]">
            {title}
          </p>
          <p className="text-[24px] text-black mb-[40px] mediamax-1079:text-[24px] mediamax-900:text-[20px]">
            {description}
          </p>
          <Link to={"/contact-us"}>
            <button className="text-[16px] font-[inherit] border-none outline-none rounded-[4px] bg-blue-gradient font-bold h-[55px] py-[14px] px-[60px] mediamax-1079:py-[10px] mediamax-1079:px-[40px] mediamax-1079:text-[14px] mediamax-1079:h-[45px] text-white cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CallUsBox;
