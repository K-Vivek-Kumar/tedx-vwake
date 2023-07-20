import React, { useState, useEffect } from "react";
import Script from "./Script";
import { FaYoutube, FaCode } from "react-icons/fa";

const FlipCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showVideo, setShowVideo] = useState(true);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setShowVideo(!isFlipped);
  }, [isFlipped]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "600px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          position: "relative",
          overflow: "hidden",
          perspective: "1000px",
        }}
        className="m-4"
      >
        {/* Front side */}
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            transformStyle: "preserve-3d",
            transition: "transform 0.6s",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {showVideo && (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 className="text-4xl font-bold text-center text-black m-2">
                Theme
              </h2>
              <div
                style={{
                  width: "80%",
                  height: "70%",
                  backgroundColor: "#000",
                  position: "relative",
                }}
              >
                {/* Place your YouTube video component or iframe here */}

                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/vsZUFsGzxcA"
                    title="YouTube Video"
                    width="100%"
                    height="100%"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <button
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  padding: "10px 20px",
                  background: "#ff0000",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={handleClick}
              >
                <FaCode style={{ marginRight: "8px" }} />
                View Script
              </button>
            </div>
          )}

          {/* Back side */}
          {!showVideo && (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transform: "rotateY(180deg)",
              }}
            >
              <div
                style={{
                  maxWidth: "100%",
                  padding: "20px",
                  boxSizing: "border-box",
                }}
              >
                <Script />
              </div>
              <button
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  padding: "10px 20px",
                  background: "#ff0000",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={handleClick}
              >
                <FaYoutube style={{ marginRight: "8px" }} />
                View Video
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
