import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CheckCircle } from "../../assets/svg/check-circle-outline.svg";

function FormSubmission() {
  return (
    <div className="relative bg-blue-gradient h-screen w-full">
      <div className="absolute top-0 left-0 z-10 h-screen w-full flex justify-center items-center gap-[32px] flex-col">
        <CheckCircle className="h-[25vh] w-[25vh]" />
        <div className="flex flex-col items-center justify-center">
          <p className="text-[45px] text-[#FDB236] font-bold mb-[15px] text-center mediamax-1023:text-[35px] mediamax-860:text-[25px] mediamax-550:text-[21px]">
            Thank You For Contacting Us
          </p>
          <p className="text-[28px] text-white text-center mediamax-1023:text-[24px] mediamax-860:text-[20px] mediamax-550:text-[17px]">
            A customer service agent will contact you shortly to help resolve
            your issue.
          </p>
        </div>
        <Link to={"/"}>
          <div className="cursor-pointer px-[32px] py-[10px] rounded-[4px] text-[16px] text-blue bg-white font-bold flex justify-center items-center">
            Back
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FormSubmission;
