import React from "react";

function CoursTextDescription({ text }) {
  return (
    <div className=" flex-[1] pl-[60px] mediamax-767:pr-[30px]">
      <div className="mt-[30px] text-[16px] flex flex-row gap-[10px] items-center mediamax-767:mt-[20px] mediamax-767:text-[13px] mediamax-1079:mt-[27px] mediamax-1079:text-[13px] mediamax-1079:gap-[8px] mediamax-950:mt-[25px] mediamax-950:text-[12px] mediamax-950:gap-[7px]">
        <p className="font-bold">مقدمة عن المحاضرة</p>
        <div className="h-[8px] w-[8px] block bg-[#153c3f] rounded-full mt-[5px] mediamax-950:h-[8px] mediamax-950:w-[8px] mediamax-950:mt-[5px]"></div>
        <p>نص المحاضرة</p>
        <div className="h-[8px] w-[8px] block bg-[#153c3f] rounded-full mt-[5px] mediamax-950:h-[8px] mediamax-950:w-[8px] mediamax-950:mt-[5px]"></div>

        <p>الأسئلة الشائعة</p>
      </div>
      <div
        className=" h-[1px] bg-[rgba(21,60,63,0.1)] w-full mt-[28px] mb-[28px] mediamax-767:mt-[18px] mediamax-767:mb-[18px] mediamax-1079:my-[18px] mediamax-950:my-[16px];
 "
      >
        <div className="w-[135px] h-full bg-[#153c3f] mediamax-767:w-[60px]"></div>
      </div>
      <div className="text-[16px] mediamax-767:text-[12px] mediamax-1079:text-[14px] mediamax-950:text-[13px]">
        <p style={{ lineHeight: "120%" }}>{text}</p>
      </div>
    </div>
  );
}

export default CoursTextDescription;
