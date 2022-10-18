import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { ReactComponent as Lock } from "../../assets/svg/lock.svg";
import { ReactComponent as Book } from "../../assets/svg/bookOpen.svg";
import { ReactComponent as Play } from "../../assets/svg/play-circle.svg";
function DataElement({
  element,
  selectedContent,
  setselectedContent,
  collapsed,
}) {
  const [collapse, setCollapse] = useState(collapsed);

  return (
    <div>
      <div
        className="cursor-pointer flex justify-between items-center pr-[65px] pl-[65px] mb-[30px] mediamax-767:pr-[25px]  mediamax-767:pl-[25px]  mediamax-767:h-[50px] mediamax-767:mb-[5px]  mediamax-1079:text-[13px]  mediamax-1079:pl-[40px]  mediamax-1079:pr-[40px]  mediamax-1079:mb-[15px] mediamax-950:text-[12px] mediamax-950:px-[30px] mediamax-950:mb-[12px]"
        onClick={() => setCollapse(!collapse)}
      >
        <p className="font-bold">{element.chapter_name}</p>
        <div className="flex gap-[12px] items-center">
         {/* {element.locked && <Lock className="opacity-20" />}
          {element.progress !== 0 && (
            <div className="smpercent">
              <svg>
                <circle cx="16.8" cy="16.8" r="14"></circle>
                <circle
                  cx="16.8"
                  cy="16.8"
                  r="14"
                  style={{ "--percent": element.progress }}
                ></circle>
              </svg>
              <div className="smnumber">
                <h3>
                  {element.progress}
                  <span>%</span>
                </h3>
              </div>
            </div>
          )}*/}
          <Arrow style={{ rotate: collapse ? "180deg" : "0deg" }} />
        </div>
      </div>
      {collapse && (
        <div className="flex flex-col mb-[30px]  mediamax-1079:mb-[27px] mediamax-950:mb-[23px]">
          {element.lessons.map((el, index) => (
            <div
              key={`data-${index}`}
              onClick={() => !el.is_open&&setselectedContent({ ...el })}
              className={
                "pt-[17px] pr-[80px] pb-[17px] pl-[64px] flex items-center text-center gap-[8px] flex-row  mediamax-767:pt-[10px]  mediamax-1079:py-[12px] mediamax-1079:pr-[52px] mediamax-950:pr-[40px] mediamax-1079:pl-[50px]  mediamax-1079:gap-[5px] cursor-pointer " +
                (el.is_complete ? "text-[#00ec8b] underline " : " ") +
                (el.id === selectedContent.id
                  ? "bg-[rgb(20,58,61,0.05)] font-bold "
                  : " ")
              }
            >          

              {el.lesson_type ==="article"? (
                <Book className="h-[14px] w-[14px]" />
              ) :(
                <Play className="text-[#153C3F] h-[14px] w-[14px]" />
              ) }
              <p>{el.title}</p>
              {el.is_open && <Lock className="opacity-20 mr-auto" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DataElement;
