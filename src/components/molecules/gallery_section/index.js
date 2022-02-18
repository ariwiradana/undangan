import React, { useState } from "react";

import { IMAGES } from "../../../config";
import { GalleryImage } from "../../atoms";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);

  const handlePrevious = () => {
    const maxLength = IMAGES.length - 1;
    setCurrentImage(currentImage - 1);
    if (currentImage === 0) {
      setCurrentImage(maxLength);
    }
  };

  const handleNext = () => {
    const maxLength = IMAGES.length - 1;
    setCurrentImage(currentImage + 1);
    if (currentImage === maxLength) {
      setCurrentImage(0);
    }
  };

  return (
    <div className="w-full relative">
      <OwlCarousel
        items={2}
        dots={false}
        autoplay
        className="owl-theme"
        loop
        nav={false}
        margin={8}
      >
        {IMAGES.map((image, i) => {
          return (
            <GalleryImage
              onClick={() => {
                setCurrentImage(i);
                setIsShowModal(true);
              }}
              key={i}
              src={require(`../../../assets/img/gallery/${image}`)}
              alt={`${i}`}
            />
          );
        })}
      </OwlCarousel>

      {isShowModal && (
        <div className="w-full h-screen bg-black fixed top-0 left-0 bg-opacity-70 z-50 flex items-center justify-center">
          <FiX
            className="absolute top-6 right-4 cursor-pointer bg-black bg-opacity-20 rounded hover:bg-opacity-40 z-50 transition duration-300 ease-in-out hover:scale-105"
            size={26}
            color="white"
            onClick={() => setIsShowModal(false)}
          />
          <FiChevronRight
            onClick={handleNext}
            className="z-50 translate-y-1/2 cursor-pointer bg-black bg-opacity-20 rounded hover:bg-opacity-40 absolute transition duration-300 ease-in-out hover:scale-105 right-3"
            size={32}
            color="white"
          />
          <FiChevronLeft
            onClick={handlePrevious}
            className="z-50 translate-y-1/2 cursor-pointer bg-black bg-opacity-20 rounded hover:bg-opacity-40 absolute transition duration-300 ease-in-out hover:scale-105 left-3"
            size={32}
            color="white"
          />
          <img
            className="object-cover hover:scale-105 transition duration-500 ease-in-out hover:object-cover"
            alt={IMAGES[currentImage]}
            src={require(`../../../assets/img/gallery/${IMAGES[currentImage]}`)}
          />
        </div>
      )}
    </div>
  );
};

export default GallerySection;
