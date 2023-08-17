import Popover from "./Popover";
import { useState } from "react";

const IconWithPopover = ({ icon, text }) => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setShowPopover(true)}
        onMouseLeave={() => setShowPopover(false)}
      >
        {icon}
      </div>
      {showPopover && (
        <div className="absolute top-9 left-1/2 transform ">
          <Popover text={text} />
        </div>
      )}
    </div>
  );
};

export default IconWithPopover;