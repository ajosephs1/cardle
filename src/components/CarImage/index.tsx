import { useState } from "react";
import { images } from "../../data/images";
import "./CarImage.scss";

type CarImageProps = {
  round: number;
};
export default function CarImage({ round }: CarImageProps) {
  const [imageModal, showImageModal] = useState(false);

  const imagePath = require(`../../data/images/bmwe30${round}.png`);
  return (
    <div className="image-container">
      <img
        src={imagePath}
        alt="car image placeholder"
        className="image"
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
