import React from "react";
import { ReactComponent as Book } from "../../assets/svg/bigborder.svg";
import { ReactComponent as CheckCircle } from "../../assets/svg/check-circleform.svg";

function FormSubmission() {
  return (
    <div className="bg-[#00EC8B] h-screen w-full flex justify-center items-center gap-[45px] flex-col">
      <Book className="absolute h-full w-full" />
      <CheckCircle className="h-[308px] w-[308px] mediamax-1023:h-[240px] mediamax-1023:w-[240px] mediamax-650:w-[180px] mediamax-650:h-[180px]"  />
      <div className="flex flex-col items-center justify-center">
        <p className="text-[45px] mb-[15px]  mediamax-1023:text-[35px] mediamax-860:text-[25px] mediamax-550:text-[21px] text-primary-color font-[bold]">
          شكرًا لتواصلك معنا
        </p>
        <p className="text-[28px]  mediamax-1023:text-[24px] mediamax-860:text-[20px] px-[40px] mediamax-550:text-[17px] text-primary-color font-[bold]">
          راح يتواصل معاك أحد المسؤولين في أقرب وقت حتى يساعدك بحل المشكلة
        </p>
      </div>
      <p className="bg-[#153C3F] mediamax-550:w-[200px] mediamax-550:text-[16px] w-[280px] text-[18px] h-[60px] text-[#00EC8B] text-[bold] flex justify-center items-center">العودة للبرنامج</p>
    </div>
  );
}

export default FormSubmission;
