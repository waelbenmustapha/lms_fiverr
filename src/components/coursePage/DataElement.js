import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { ReactComponent as Lock } from "../../assets/svg/lock.svg";
import { ReactComponent as Book } from "../../assets/svg/bookOpen.svg";
import { ReactComponent as Play } from "../../assets/svg/play-circle.svg";
function DataElement({ element, selectedData, setSelectedData }) {
  const [collapse, setCollapse] = useState(false);
  console.log(element);
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
          <Arrow style={{ rotate: !collapse ? "180deg" : "0deg" }} />
        </div>
      </div>
      {collapse && (
        <div className="datatypes">
          {element.content.map((el) => (
            <div
              onClick={() => setSelectedData({...el})}
              className={
                "dataElement hover-cursor " +
                (el.finished ? "isElementFinished " : " ") +
                (el.id === selectedData.id ? "selected " : " ")
              }
            >
              {el.type === "text" ? (
                <Book style={{ height: "14px", width: "14px" }} />
              ) : el.type === "video" ? (
                <Play style={{ height: "14px", width: "14px" }} />
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
