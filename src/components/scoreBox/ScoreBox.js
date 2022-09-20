import React from "react";
import { ReactComponent as Clock } from "../../assets/svg/clock.svg";
import { ReactComponent as Book } from "../../assets/svg/bookOpen.svg";
import { ReactComponent as Award } from "../../assets/svg/award.svg";

function ScoreBox({
  title1,
  description1,
  title2,
  description2,
  title3,
  description3,
}) {
  return (
    <div className="w-full bg-primary-color">
      <div className="flex flex-row items-center justify-center gap-[130px] mediamax-1079:gap-[110px] mediamax-900:gap-[60px] w-full py-[100px] px-[20px] mediamax-1079:py-[70px] mediamax-900:py-[60px] bg-green translate-x-[6px] translate-y-[-6px] mediamax-650:gap-[50px] mediamax-650:py-[50px] mediamax-650:px-[20px] mediamax-550:flex-col ">
        <div className="flex flex-row items-center justify-center">
          <Clock className="w-[100px] h-[100px] ml-[16px] mediamax-1079:w-[70px] mediamax-1079:h-[70px] mediamax-900:w-[50x] mediamax-900:h-[50px] mediamax-650:w-[40px] mediamax-650:h-[40px]" />
          <div className="score-item-content">
            <p className="text-[54px] leading-[1] font-bold mediamax-1079:text-[40px] mediamax-900:text-[32px] mediamax-650:text-[28px]">
              {title1}
            </p>
            <p className="text-[28px] font-bold mediamax-1079:text-[20px] mediamax-900:text-[18px] mediamax-650:text-[16px]">
              {description1}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Book className="w-[100px] h-[100px] ml-[16px] mediamax-1079:w-[70px] mediamax-1079:h-[70px] mediamax-900:w-[50x] mediamax-900:h-[50px] mediamax-650:w-[40px] mediamax-650:h-[40px]" />
          <div>
            <p className="text-[54px] leading-[1] font-bold mediamax-1079:text-[40px] mediamax-900:text-[32px] mediamax-650:text-[28px]">
              {title2}
            </p>
            <p className="text-[28px] font-bold mediamax-1079:text-[20px] mediamax-900:text-[18px] mediamax-650:text-[16px]">
              {description2}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Award className="w-[100px] h-[100px] ml-[16px] mediamax-1079:w-[70px] mediamax-1079:h-[70px] mediamax-900:w-[50x] mediamax-900:h-[50px] mediamax-650:w-[40px] mediamax-650:h-[40px]" />
          <div>
            <p className="text-[54px] leading-[1] font-bold mediamax-1079:text-[40px] mediamax-900:text-[32px] mediamax-650:text-[28px]">
              {title3}
            </p>
            <p className="text-[28px] font-bold mediamax-1079:text-[20px] mediamax-900:text-[18px] mediamax-650:text-[16px]">
              {description3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreBox;
