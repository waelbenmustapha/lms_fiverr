import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { ReactComponent as Lock } from "../../assets/svg/lock.svg";
import { ReactComponent as Book } from "../../assets/svg/bookOpen.svg";
import { ReactComponent as Play } from "../../assets/svg/play-circle.svg";
function DataElement({ element, selectedContent, setselectedContent ,collapsed }) {
  const [collapse, setCollapse] = useState(collapsed);
  
  return (
    <div>
      <div
        className="hover-cursor"
        onClick={() => setCollapse(!collapse)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "65px",
          paddingLeft: "65px",
          marginBottom: "30px",
        }}
      >
        <p
          style={{
            fontFamily: "bold",

            fontSize: "14px",
          }}
        >
          {element.name}
        </p>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          {element.locked && <Lock style={{ opacity: 0.2 }} />}
          {element.progress!==0 && (
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
          <Arrow style={{ rotate: collapse ? "180deg" : "0deg" }} />
        </div>
      </div>
      {collapse && (
        <div className="datatypes">
          {element.content.map((el) => (
            <div
              onClick={() => setselectedContent({ ...el })}
              className={
                "dataElement hover-cursor " +
                (el.finished ? "isElementFinished " : " ") +
                (el.id === selectedContent.id ? "selected " : " ")
              }
            >
              {el.type === "text" ? (
                <Book style={{ height: "14px", width: "14px" }} />
              ) : el.type === "video" ? (
                <Play  style={{ color:"#153C3F",height: "14px", width: "14px" }} />
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
