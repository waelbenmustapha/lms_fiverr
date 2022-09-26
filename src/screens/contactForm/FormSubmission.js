import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BigBorder } from "../../assets/svg/bigborder.svg";
import { ReactComponent as CheckCircle } from "../../assets/svg/check-circleform.svg";

function FormSubmission() {
  return (
    <div className="relative bg-[#00EC8B] h-screen w-full">
      <BigBorder className="absolute h-screen w-full top-0 left-0" />
      <div className="absolute top-0 left-0 z-10 h-screen w-full flex justify-center items-center gap-[32px] flex-col">
        <CheckCircle className="h-[25vh] w-[25vh]" />
        <div className="flex flex-col items-center justify-center">
          <p className="text-[45px] mb-[15px] text-center mediamax-1023:text-[35px] mediamax-860:text-[25px] mediamax-550:text-[21px] text-primary-color font-bold">
            شكرًا لتواصلك معنا
          </p>
          <p className="text-[28px] text-center mediamax-1023:text-[24px] mediamax-860:text-[20px] px-[40px] mediamax-550:text-[17px] text-primary-color font-bold">
            راح يتواصل معاك أحد المسؤولين في أقرب وقت حتى يساعدك بحل المشكلة
          </p>
        </div>
        <Link to={"/"}>
          <div className="bg-[#153C3F] w-[200px] h-[50px] cursor-pointer mediamax-550:text-[16px] text-[18px] text-[#00EC8B] text-[bold] flex justify-center items-center">
            العودة للبرنامج
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FormSubmission;
