import axios from "axios";
import { useState, useEffect } from "react";
import { images } from "../../data/images";
import "./CarImage.scss";

type CarImageProps = {
  round: number;
};
export default function CarImage({ round }: CarImageProps) {
  const [imageModal, showImageModal] = useState(false);
  const [carImages, setCarImages] = useState(null);

  const imagePath = require(`../../data/images/bmwe30${round}.png`);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/answers/1?populate=%2A")
      .then((response) => {
        const imgObj = {}
        console.log(response.data.data.attributes.carImages);
      });
  }, []);
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
