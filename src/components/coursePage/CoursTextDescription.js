import React, { useState } from "react";

function CoursTextDescription({ text,description2 }) {
  const [selectedDescription, setSelectedDescription] = useState(1);
  return (
    <div className=" flex-[1] pl-[60px] mediamax-767:pr-[30px]">
      <div className="mt-[30px] text-[16px] flex flex-row gap-[10px] items-center mediamax-767:mt-[20px] mediamax-767:text-[13px] mediamax-1079:mt-[27px] mediamax-1079:text-[13px] mediamax-1079:gap-[8px] mediamax-950:mt-[25px] mediamax-950:text-[12px] mediamax-950:gap-[7px]">
        <p
          onClick={() => setSelectedDescription(1)}
          className={`py-[20px]  cursor-pointer ${
            selectedDescription === 1 && "font-bold border-b-[1px] border-b-[#153c3f] "
          }`}        >
          مقدمة عن المحاضرة
        </p>
        <div className="h-[8px] w-[8px] block bg-[#153c3f] rounded-full mt-[5px] mediamax-950:h-[8px] mediamax-950:w-[8px] mediamax-950:mt-[5px]"></div>
        <p
          onClick={() => setSelectedDescription(2)}
          className={`py-[20px] cursor-pointer ${
            selectedDescription === 2 && "font-bold border-b-[1px] border-b-[#153c3f] "
          }`}
        >
          نص المحاضرة
        </p>
        <div className="h-[8px] w-[8px] block bg-[#153c3f] rounded-full mt-[5px] mediamax-950:h-[8px] mediamax-950:w-[8px] mediamax-950:mt-[5px]"></div>

        <p
          onClick={() => setSelectedDescription(3)}
          className={`py-[20px]  cursor-pointer ${
            selectedDescription === 3 && "font-bold border-b-[1px] border-b-[#153c3f] "
          }`}        >
          الأسئلة الشائعة
        </p>
      </div>
      <div className=" h-[1px] bg-[rgba(21,60,63,0.1)] w-full  mb-[28px]  mediamax-767:mb-[18px] mt-[-1px] ">
      </div>
      <div className="text-[16px] mediamax-767:text-[12px] mediamax-1079:text-[14px] mediamax-950:text-[13px]">
        {selectedDescription === 1 ? (
          <p style={{ lineHeight: "120%" }}>{text}</p>
        ) : selectedDescription === 2 ? (
          <div dangerouslySetInnerHTML={{__html: description2}}></div>
        ) : selectedDescription === 3 ? (
          <p>selected 3</p>
        ) : null}
      </div>
    </div>
  );
}

export default CoursTextDescription;
