import React from "react";
// Icons from react library
import { FaCalendar, FaUsers, FaInfoCircle } from "react-icons/fa";

const NavigationBoard = (props: { theme: any }) => {
  const getTextColor = () => {
    if (props.theme === "black") {
      return "text-white";
    } else {
      return "text-black";
    }
  };

  const getHoverColor = () => {
    if (props.theme === "black") {
      return "hover:text-red-500";
    } else {
      return "hover:text-white";
    }
  };

  const getBackgroundColor = () => {
    if (props.theme === "black") {
      return "bg-black";
    } else {
      return "bg-red-500";
    }
  };

  return (
    <nav className={`${getBackgroundColor()} ${getTextColor()}`}>
      <div className="container mx-auto px-4 py-4">
        <ul className="flex flex-wrap justify-evenly font-bold">
          <li>
            <a
              href="/events"
              className={`flex items-center mx-2 ${getHoverColor()}`}
            >
              <FaCalendar className="mr-2" />
              Events
            </a>
          </li>
          <li>
            <a
              href="/team"
              className={`flex items-center mx-2 ${getHoverColor()}`}
            >
              <FaUsers className="mr-2" />
              Team
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`flex items-center mx-2 ${getHoverColor()}`}
            >
              <FaInfoCircle className="mr-2" />
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBoard;
