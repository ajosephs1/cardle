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
  const [imageAnimation, setImageAnimation] = useState({
    1: "",
    2: "image--next",
    3: "image--next",
    4: "image--next",
    5: "image--next",
  });

  useEffect(() => {
    if (round === 1) {
      return;
    } else {
      setImageAnimation({
        ...imageAnimation,
        [round - 1]: "image--slide-out",
        [round]: "image--slide-in",
      });
    }
  }, [round]);

  return (
    <div className="image-container">
      <div className="image__slider">
        <img
          src={images.imageOne}
          alt="car image placeholder"
          className={`image image--one ${imageAnimation[1]}`}
          onClick={() => showImageModal(true)}
        />
        <img
          src={images.imageTwo}
          alt="car image placeholder"
          className={`image ${imageAnimation[2]}`}
          onClick={() => showImageModal(true)}
        />
        <img
          src={images.imageThree}
          alt="car image placeholder"
          className={`image ${imageAnimation[3]}`}
          onClick={() => showImageModal(true)}
          loading="lazy"
        />
        <img
          src={images.imageFour}
          alt="car image placeholder"
          className={`image ${imageAnimation[4]}`}
          onClick={() => showImageModal(true)}
          loading="lazy"
        />
        <img
          src={images.imageFive}
          alt="car image placeholder"
          className={`image ${imageAnimation[5]}`}
          onClick={() => showImageModal(true)}
          loading="lazy"
        />
      </div>

      {imageModal && (
        <div className="image--modal" onClick={() => showImageModal(false)}>
          <img
            src={
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
                : ""
            }
            alt="car image placeholder"
            className="image--modal-content"
          />
        </div>
      )}
    </div>
  );
}
