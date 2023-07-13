import React, { useEffect, useRef, useState } from "react";

const MemoriesAlbum = () => {
  const imageUrls = [
    "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
    "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
    "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
    "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
    "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
    "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
    "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
    "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
    "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
    "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
    "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
    "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
    "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
  ];

  const firstRowImages = imageUrls.slice(0, Math.ceil(imageUrls.length / 2));
  const secondRowImages = imageUrls.slice(Math.ceil(imageUrls.length / 2));

  const firstRowRef = useRef<HTMLDivElement | null>(null);
  const secondRowRef = useRef<HTMLDivElement | null>(null);

  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    const startScrolling = () => {
      if (!scrollInterval) {
        const interval = setInterval(scrollImages, 3000);
        setScrollInterval(interval);
      }
    };

    const stopScrolling = () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
        setScrollInterval(null);
      }
    };

    const scrollImages = () => {
      const firstRowElement = firstRowRef.current;
      const secondRowElement = secondRowRef.current;

      if (firstRowElement && secondRowElement) {
        const scrollDistance = firstRowElement.offsetWidth;

        firstRowElement.scrollTo({
          left: firstRowElement.scrollLeft + scrollDistance,
          behavior: "smooth",
        });

        secondRowElement.scrollTo({
          left: secondRowElement.scrollLeft - scrollDistance,
          behavior: "smooth",
        });

        if (
          firstRowElement.scrollLeft >=
          firstRowElement.scrollWidth - scrollDistance
        ) {
          firstRowElement.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }

        if (secondRowElement.scrollLeft <= 0) {
          secondRowElement.scrollTo({
            left: secondRowElement.scrollWidth,
            behavior: "smooth",
          });
        }
      }
    };

    startScrolling();

    return () => {
      stopScrolling();
    };
  }, [scrollInterval]);

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Memories</h1>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 overflow-hidden border border-gray-300 rounded-lg">
          <div
            className="flex items-center"
            style={{ scrollBehavior: "smooth" }}
            ref={firstRowRef}
          >
            {firstRowImages.map((imageUrl, index) => (
              <div
                key={index}
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-full md:w-1/2 overflow-hidden border border-gray-300 rounded-lg">
          <div
            className="flex items-center"
            style={{ scrollBehavior: "smooth" }}
            ref={secondRowRef}
          >
            {secondRowImages.map((imageUrl, index) => (
              <div
                key={index}
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoriesAlbum;
