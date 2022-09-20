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
        className="cursor-pointer  flex justify-between items-center pr-[65px] pl-[65px] mb-[30px]"
        onClick={() => setCollapse(!collapse)}
      >
        <p
         className="font-[bold]"
        >
          {element.name}
        </p>
        <div className="flex gap-[12px] items-center">
          {element.locked && <Lock className="opacity-20" />}
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
          )}
          <Arrow  style={{ rotate: collapse ? "180deg" : "0deg" }} />
        </div>
      </div>
      {collapse && (
        <div className="flex flex-col mb-[30px]">
          {element.content.map((el, index) => (
            <div
              key={`data-${index}`}
              onClick={() => setselectedContent({ ...el })}
              className={
                "pt-[17px] pr-[80px] pb-[17px] pl-[64px] flex items-center text-center gap-[8px] flex-row " +
                (el.finished ? "text-[#00ec8b] underline " : " ") +
                (el.id === selectedContent.id ? "font-[bold] " : " ")
              }
            >
              {el.type === "text" ? (
                <Book className="h-[14px] w-[14px]" />
              ) : el.type === "video" ? (
                <Play
                className="text-[#153C3F] h-[14px] w-[14px]"
                />
              ) : null}
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DataElement;
