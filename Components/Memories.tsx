import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const photos = [
  "https://yt3.googleusercontent.com/K9e4vbIehtJwE9gqHbzbo3mr8CgNgYFPxY_sCLJImu9QvcrYV8S-t3Ef_14UWp863rKA-1qx_Q=s900-c-k-c0x00ffffff-no-rj",
  "https://newsresolution.com/wp-content/uploads/2021/01/Nancy-Momoland-Singer-Age-height-Weight-Size-DOB-Boyfriends-Biography-1.jpg",
  "https://www.pinkvilla.com/pics/480x480/nancy_momoland_main_wm_202209.png",
  "https://wallpaperaccess.com/full/2980955.jpg",
  "https://e1.pxfuel.com/desktop-wallpaper/25/1012/desktop-wallpaper-nancy-momoland-mobile-nancy-momoland.jpg",
  "https://e0.pxfuel.com/wallpapers/281/18/desktop-wallpaper-nancy-momoland-model-korean-dancer.jpg",
  "https://e1.pxfuel.com/desktop-wallpaper/843/707/desktop-wallpaper-nancy-momoland-android-nancy-momoland.jpg",
  "https://e0.pxfuel.com/wallpapers/791/320/desktop-wallpaper-momoland-nancy-japan2ndsingle-baam-nancy-jewel.jpg",
  "https://e0.pxfuel.com/wallpapers/77/470/desktop-wallpaper-nancy-momoland-best-48154.jpg",
  "https://e1.pxfuel.com/desktop-wallpaper/774/902/desktop-wallpaper-emi-jennifer%E2%99%A1-on-momoland-nancy-nancy-momoland.jpg",
  "https://aboutbiography.com/wp-content/uploads/2022/05/cropped-nancy-jewel-mcdonie-instagram.jpg",
];

const Memories = () => {
  return (
    <div className="container mx-auto pb-4 px-4">
      <h2 className="text-3xl font-bold text-center text-black my-8">
        Memories
      </h2>
      <div className="flex justify-center">
        <div className="w-full p-4 bg-white shadow-lg border border-gray-300 rounded-lg">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            stopOnHover={true}
            centerMode={true}
            centerSlidePercentage={33.33}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -ml-8 text-white bg-black bg-opacity-50 rounded-full outline-none cursor-pointer focus:outline-none"
                >
                  &lt;
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute right-0 z-10 flex items-center justify-center w-8 h-8 -mr-8 text-white bg-black bg-opacity-50 rounded-full outline-none cursor-pointer focus:outline-none"
                >
                  &gt;
                </button>
              )
            }
            className="overflow-hidden"
          >
            {photos.map((photo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-96"
              >
                <img
                  src={photo}
                  alt={`Memory ${index}`}
                  className="object-cover h-full mx-auto"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Memories;
