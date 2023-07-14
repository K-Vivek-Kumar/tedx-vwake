import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaBlog,
} from "react-icons/fa";

const Footerlink = (props: any) => {
  const getFooterColor = () => {
    return props.theme === "black" ? "bg-black" : "bg-red-800";
  };

  const getIconColor = () => {
    return props.theme === "black" ? "text-white" : "text-white";
  };

  const iconSize = "text-3xl";
  const iconSizeHovered = "text-4xl";

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 py-4 px-8 ${getFooterColor()} bg-opacity-75`}
    >
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className={`${iconSize} ${getIconColor()} transition-transform duration-300 hover:${iconSizeHovered}`}
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube
              className={`${iconSize} ${getIconColor()} transition-transform duration-300 hover:${iconSizeHovered}`}
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              className={`${iconSize} ${getIconColor()} transition-transform duration-300 hover:${iconSizeHovered}`}
            />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className={`${iconSize} ${getIconColor()} transition-transform duration-300 hover:${iconSizeHovered}`}
            />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              className={`${iconSize} ${getIconColor()} transition-transform duration-300 hover:${iconSizeHovered}`}
            />
          </a>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBlog
              className={`${iconSize} ${getIconColor()} transition-transform duration-300 hover:${iconSizeHovered}`}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footerlink;
