import React from "react";

const HomepageItem = (props: any) => {
  const { theme } = props;

  const getButtonStyles = () => {
    if (theme === "black") {
      return "bg-gray-500 text-white hover:bg-red-500";
    } else {
      return "bg-red-500 text-white hover:bg-black";
    }
  };

  const getHeadingStyles = () => {
    if (theme === "black") {
      return "text-4xl font-bold text-center mb-4";
    } else {
      return "text-4xl font-bold text-center text-red-500 mb-4";
    }
  };

  const getSubtitleStyles = () => {
    if (theme === "black") {
      return "text-xl text-center text-white mb-6";
    } else {
      return "text-xl text-center text-black mb-6";
    }
  };

  const containerStyles = {
    backgroundColor: theme === "black" ? "#343434" : "#F4D4DC",
    color: theme === "black" ? "white" : "white",
    borderRadius: "8px",
    padding: "32px",
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg m-4">
      <div style={containerStyles}>
        <h1 className={getHeadingStyles() + " p-4"}>
          <span
            className={theme === "black" ? "text-red-500" : "text-red-500"}
            style={{
              marginRight: "8px",
              textShadow:
                theme === "black" ? "none" : "2px 2px 4px rgba(0, 0, 0, 0.2)",
              lineHeight: "0.9",
            }}
          >
            S
          </span>
          <span
            className={theme === "black" ? "text-white" : "text-red-500"}
            style={{
              marginRight: "8px",
              textShadow:
                theme === "black" ? "none" : "2px 2px 4px rgba(0, 0, 0, 0.2)",
              lineHeight: "0.9",
            }}
          >
            A
          </span>
          <span
            className={theme === "black" ? "text-red-500" : "text-red-500"}
            style={{
              marginRight: "8px",
              textShadow:
                theme === "black" ? "none" : "2px 2px 4px rgba(0, 0, 0, 0.2)",
              lineHeight: "0.9",
            }}
          >
            G
          </span>
          <span
            className={theme === "black" ? "text-white" : "text-red-500"}
            style={{
              textShadow:
                theme === "black" ? "none" : "2px 2px 4px rgba(0, 0, 0, 0.2)",
              lineHeight: "0.9",
            }}
          >
            A
          </span>
        </h1>
        <p className={getSubtitleStyles()}>Weaving humanity's Tapestry</p>
        <p
          className={
            theme === "black"
              ? "text-lg text-red-600 text-center mb-6"
              : "text-lg text-red-600 text-center mb-6"
          }
        >
          Timely and timeless, humanity is the best for us
        </p>
        <div className="flex justify-center">
          <button
            className={`px-6 py-3 rounded-full font-bold text-lg ${getButtonStyles()}`}
          >
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomepageItem;
