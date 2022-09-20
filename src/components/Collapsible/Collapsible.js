import { useState, useRef } from "react";
// Import SVG
import { ReactComponent as ArrowUp } from "../../assets/svg/arrowUp.svg";
import { ReactComponent as ArrowDown } from "../../assets/svg/arrowDown.svg";

const Collapsible = (props) => {
  const [open, setOPen] = useState(false);

  const contentRef = useRef();
  if (contentRef.current) console.log(contentRef.current.scrollHeight);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div
      className="cursor-pointer"
      style={
        open
          ? { backgroundColor: "#00EC8B" }
          : { backgroundColor: "rgba(21, 60, 63, 5%)" }
      }
    >
      <div
        className="w-full flex flex-row justify-between items-center py-[28px] px-[32px] mediamax-767:p-[20px]"
        onClick={toggle}
      >
        <p className="text-[20px] mediamax-1079:text-[18px] font-bold">
          {props.label}
        </p>
        {open ? (
          <ArrowUp className="w-[17px] h-[8px]" />
        ) : (
          <ArrowDown className="w-[17px] h-[8px]" />
        )}
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
        <div className="text-[16px] px-[32px] pt-[8px] pb-[32px]">
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default Collapsible;
