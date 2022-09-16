import React, { useState } from "react";

function DataElement({ element, selectedData, setSelectedData }) {
  const [collapse, setCollapse] = useState(false);
  console.log(element);
  return (
    <div >
      <p
      className="hover-cursor"
        onClick={() => setCollapse(!collapse)}
        style={{ fontFamily: "bold",marginRight:"65px", fontSize: "14px", marginBottom: "30px" }}
      >
        {element.name}
      </p>
      {collapse && (
        <div className="datatypes">
          {element.content.map((el) => (
            <div
              onClick={() => setSelectedData(el.id)}
              className={"dataElement hover-cursor "+(el.finished ? 'isElementFinished ':" ")+(el.id===selectedData?"selected ":" ")}
            >
             
              {el.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DataElement;
