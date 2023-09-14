import { useState, useEffect } from "react";
import "./CarImage.scss";

type CarImageProps = {
  round: number;
  images: {
    imageFull: string;
    imageOne: string;
    imageTwo: string;
    imageThree: string;
    imageFour: string;
    imageFive: string;
  };
};
export default function CarImage({ round, images }: CarImageProps) {
  const [imageModal, showImageModal] = useState(false);

  const imagePath =
    round === 1
      ? images.imageOne
      : round === 2
      ? images.imageTwo
      : round === 3
      ? images.imageThree
      : round === 4
      ? images.imageFour
      : round === 5
      ? images.imageFive
      : "";

  const initialImageClass =
    round === 1 ? "image image--transition fadeIn" : "image image--transition";


    // store all images in an array 
    //change image when round changes and add animation 
    //have 2 image components 1 has the previous and 2 has the next when stae updates add class to slide out one and slide in 2 2 then becomes one and 3 becomes 2 
  return (
    <div className="image-container">
      <img
        src={imagePath}
        alt="car image placeholder"
        className={initialImageClass}
        onClick={() => showImageModal(true)}
      />
      {imageModal && (
        <div className="image--modal" onClick={() => showImageModal(false)}>
          <img
            src={imagePath}
            alt="car image placeholder"
            className="image--modal-content"
          />
        </div>
      )}
    </div>
  );
}
