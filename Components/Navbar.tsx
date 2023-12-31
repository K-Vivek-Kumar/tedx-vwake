import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import NavigationBoard from "./Navboard";
import Book from "./Book";
import Footerlink from "./Footerlink";
import FlipCard from "./FlipCard";
import ReasonsToAttend from "./ReasonstoAttend";
import Footer from "./Footer";
import FooterRights from "./FooterRights";
import FooterDeveloper from "./FooterDeveloper";
import Memories from "./Memories";

const Navbar = () => {
  const [ist, setIst] = useState(false);
  const [isBlackTheme, setIsBlackTheme] = useState(false);

  const dotcom = () => {
    setIst(true);
  };
  const dotcom1 = () => {
    setIst(false);
  };

  const toggleTheme = () => {
    setIsBlackTheme((prevTheme) => !prevTheme);
  };

  return (
    <>
      <nav
        className={
          isBlackTheme ? "bg-black text-white" : "bg-red-600 text-white"
        }
      >
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <div className="group cursor-pointer">
              <span
                className={
                  isBlackTheme
                    ? "font-bold text-2xl hover:text-red-600 transition-colors duration-300"
                    : "font-bold text-2xl hover:text-black transition-colors duration-300"
                }
                onMouseEnter={dotcom}
                onMouseLeave={dotcom1}
              >
                TEDx
              </span>
              {ist && (
                <span className="text-2xl text-white font-bold">.com</span>
              )}
              {!ist && (
                <span
                  className={
                    isBlackTheme
                      ? "text-2xl text-red-600 font-bold hover:text-white"
                      : "text-2xl text-black font-bold hover:text-white"
                  }
                >
                  IITHyderabad
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center mt-4 sm:mt-0">
            {isBlackTheme ? (
              <FaSun
                className="mr-2 transition-colors duration-900 hover:text-white cursor-pointer"
                onClick={toggleTheme}
                size={20}
              />
            ) : (
              <FaMoon
                className="mr-2 transition-colors duration-900 hover:text-white cursor-pointer"
                onClick={toggleTheme}
                size={20}
              />
            )}
          </div>
        </div>
        <div
          className={
            isBlackTheme ? "bg-slate-300 text-white" : "bg-red-100 text-white"
          }
        >
          <NavigationBoard theme={isBlackTheme ? "black" : "red"} />
          <Book theme={isBlackTheme ? "black" : "red"} />
          <ReasonsToAttend theme={isBlackTheme ? "black" : "red"} />
          <FlipCard />
          <Memories />
          <Footer theme={isBlackTheme ? "black" : "red"} />
          <FooterRights theme={isBlackTheme ? "black" : "red"} />
          <FooterDeveloper theme={isBlackTheme ? "black" : "red"} />
          <Footerlink theme={isBlackTheme ? "black" : "red"} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
