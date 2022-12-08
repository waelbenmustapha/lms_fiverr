import React from "react";
import { Link } from "react-router-dom";

function CallUsBox({ title, description }) {
  return (
    <div className="flex flex-col justify-center items-center text-center w-full py-[100px] px-[20px] mediamax-1079:py-[70px] mediamax-900:py-[50px] bg-green">
      <p className="text-[64px] font-bold mb-[10px] mediamax-1079:text-[48px] mediamax-900:text-[36px]">
        {title}
      </p>
      <p className="text-[28px] font-bold mb-[30px] mediamax-1079:text-[24px] mediamax-900:text-[20px]">
        {description}
      </p>
      <Link to={"/contact-us"}>
        <button className="text-[16px] font-[inherit] border-none outline-none bg-black font-bold h-[55px] py-[14px] px-[60px] mediamax-1079:py-[10px] mediamax-1079:px-[40px] mediamax-1079:text-[14px] mediamax-1079:h-[45px] text-white cursor-pointer">
          تواصل معنا
        </button>
      </Link>
    </div>
  );
}

export default CallUsBox;
