import { useState, useRef } from "react";
// Import SVG
import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";

const Collapsible = (props) => {
  const [open, setOPen] = useState(false);

  const contentRef = useRef();

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className="cursor-pointer shadow-card">
      <div
        className="w-full flex flex-row justify-between items-center p-[20px]"
        style={
          open
            ? { backgroundColor: "#3252C1", color: "#fff" }
            : { backgroundColor: "#fff", color: "#3252C1" }
        }
        onClick={toggle}
      >
        <p className="text-[20px] mediamax-1079:text-[18px]">{props.label}</p>
        <ArrowDown
          style={
            open
              ? { transform: "rotate(180deg)", color: "#fff" }
              : { transform: "rotate(0deg)", color: "#3252C1" }
          }
          className="w-[17px] h-[8px] duration-150"
        />
      </div>
      <div
        className="h-[0px] overflow-hidden transition-[height] duration-[0.38s]"
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="text-[16px] px-[20px] pt-[8px] pb-[20px]">
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default Collapsible;
