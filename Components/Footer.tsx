import React from "react";

const Footer = (props: { theme: any }) => {
  const isBlackTheme = props.theme === "black";

  const getTextColor = () => {
    return isBlackTheme ? "text-black" : "text-white";
  };

  const getLinkColor = () => {
    return isBlackTheme
      ? "text-red-600 hover:text-red-800"
      : "text-white hover:text-white";
  };

  const footerStyle = isBlackTheme
    ? "bg-gray-100 text-black py-8 p-8 rounded-lg shadow-lg mx-4"
    : "bg-red-600 text-white py-8 p-8 rounded-lg shadow-lg mx-4";

  return (
    <footer className={footerStyle}>
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="col-span-1">
            <h5 className={`mb-4 text-xl font-bold ${getTextColor()}`}>
              Programs & Initiatives
            </h5>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                <a
                  className={getLinkColor()}
                  href="https://www.ted.com/about/programs-initiatives/tedx-program"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TEDx
                </a>
              </li>
              <li className="mb-2">
                <a
                  className={getLinkColor()}
                  href="https://www.ted.com/participate/ted-fellows-program/apply-to-be-a-ted-fellow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TED Fellows
                </a>
              </li>
              <li className="mb-2">
                <a
                  className={getLinkColor()}
                  href="https://ed.ted.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TED Ed
                </a>
              </li>
              <li className="mb-2">
                <a
                  className={getLinkColor()}
                  href="https://www.ted.com/about/programs-initiatives/ted-translators"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TED Translators
                </a>
              </li>
              <li className="mb-2">
                <a
                  className={getLinkColor()}
                  href="https://www.ted.com/about/programs-initiatives/ted-institute"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TED Institute
                </a>
              </li>
              <li className="mb-2">
                <a
                  className={getLinkColor()}
                  href="https://www.audaciousproject.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Audacious Project
                </a>
              </li>
              <li className="mb-2">
                <a
                  className={getLinkColor()}
                  href="https://www.ted.com/about/programs-initiatives/ted-work#:~:text=TED%40Work%20is%20a%20content,specially%20curated%20for%20Learning%20%26%20Development"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TED@Work
                </a>
              </li>
              <li className="mb-2">
                <a
                  className={getLinkColor()}
                  href="https://speakersbureau.ted.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TED Speakers Bureau
                </a>
              </li>
              <li className="mb-2">
                <a
                  className={getLinkColor()}
                  href="https://courses.ted.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TED Courses
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className={`mb-4 text-xl font-bold ${getTextColor()}`}>
              Our Community
            </h5>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                <a
                  className={getLinkColor()}
                  href="https://www.ted.com/speakers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TED Speakers
                </a>
              </li>
              <li className="mb-2">
                <a
                  className={getLinkColor()}
                  href="https://www.ted.com/participate/ted-fellows-program/meet-the-ted-fellows"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TED Fellows
                </a>
              </li>
              <li className="mb-2">
                <a
                  className={getLinkColor()}
                  href="https://www.ted.com/about/programs-initiatives/ted-translators"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TED Translators
                </a>
              </li>
              <li className="mb-2">
                <a
                  className={getLinkColor()}
                  href="https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TEDx Organizers
                </a>
              </li>
              <li className="mb-2">
                <a
                  className={getLinkColor()}
                  href="https://community.ted.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TED Community
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
