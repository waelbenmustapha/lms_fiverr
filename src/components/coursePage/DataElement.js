import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { ReactComponent as Lock } from "../../assets/svg/lock.svg";
import { ReactComponent as Book } from "../../assets/svg/book.svg";
import { ReactComponent as Play } from "../../assets/svg/film.svg";
function DataElement({
  element,
  selectedContent,
  setselectedContent,
  progress,
  collapsed,
  sertVideoStarted,
}) {
  const [collapse, setCollapse] = useState(collapsed);
  console.log(element);
  return (
    <div>
      <div
        className={" cursor-pointer flex justify-between  items-center pr-[40px] pl-[65px] py-[16px] mediamax-767:pr-[20px]  mediamax-767:pl-[25px]  mediamax-767:h-[50px]   mediamax-1079:text-[13px]  mediamax-1079:pl-[40px]  mediamax-1079:pr-[30px]   mediamax-950:text-[12px] mediamax-950:px-[30px] "+(element.locked?" bg-[#F1F1F1] mt-[-1px] border-t-[1px] border-t-[#647CCF] border-b-[1px] border-b-[#647CCF]":" backgroundblue ")}
        onClick={() => {if(!element.locked)setCollapse(!collapse)}}
      >
        <div>
          <p className={"font-bold  text-white " + (element.locked ?" text-[#D2D2D2]":" white")}>{element.chapter_name}</p>
          <p className={"text-[10px] py-[7px]  "+(element.locked?"text-[#D6D6D6]":" text-[rgba(251,206,132,1)]")}>
            4 Lessons, 45 Minutes
          </p>
        </div> 
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
          <>
            {element.locked ? (
              <Lock />
            ) : element.progress !== 0 ? (
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
                    {progress}
                    <span>%</span>
                  </h3>
                </div>
              </div>
            ) : null}
          </>
          <Arrow
            color={element.locked?"#D6D6D6":"white"}
            fill="white"
            style={{ rotate: collapse ? "180deg" : "0deg" }}
          />
        </div>
      </div>
      {collapse && (
        <div className="flex flex-col mb-[30px]  mediamax-1079:mb-[27px] mediamax-950:mb-[23px]">
          {element.lessons.map((el, index) => (
            <div
              key={`data-${index}`}
              onClick={() => {
                if (el.is_open) {
                  setselectedContent({ ...el });
                  sertVideoStarted(false);
                }
              }}
              className={
                "pt-[17px] pr-[40px] pb-[17px] pl-[64px] flex items-center text-center gap-[8px] flex-row  mediamax-767:pt-[10px]  mediamax-1079:py-[12px] mediamax-1079:pr-[52px] mediamax-950:pr-[40px] mediamax-1079:pl-[50px]  mediamax-1079:gap-[5px] cursor-pointer " +
                (el.is_complete ? "  " : " ") +
                (el.id === selectedContent.id
                  ? "bg-[rgb(20,58,61,0.05)] font-bold "
                  : " ")
              }
            >
              {el.lesson_type === "article" ? (
                <Book className="h-[14px] w-[14px]" />
              ) : (
                <Play className="text-[#153C3F] h-[14px] w-[14px]" />
              )}
              <p  className="text-[14px] font-[400]">{el.title}</p>
              <div className="ml-auto">
                <p className="text-[#9C8DFD] text-[10px] font-bold">
                  {" "}
                  {el.duration} minutes
                </p>

                {!el.is_open && <Lock className="opacity-20" />}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DataElement;
