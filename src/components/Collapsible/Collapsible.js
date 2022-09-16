import { useState, useRef } from "react";
import "./collapsible.css";

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
      className="collapsible"
      style={
        open
          ? { backgroundColor: "#00EC8B" }
          : { backgroundColor: "rgba(21, 60, 63, 5%)" }
      }
    >
      <div className="collapsible-header" onClick={toggle}>
        <p className="collapsible-label">{props.label}</p>
        {open ? (
          <ArrowUp className="collapsible-icon" />
        ) : (
          <ArrowDown className="collapsible-icon" />
        )}
      </div>
      <div
        className="collapsible-content-parent"
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="collapsible-content">{props.children}</div>
      </div>
    </div>
  );
};
export default Collapsible;
