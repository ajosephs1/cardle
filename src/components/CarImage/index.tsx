import { useState, useEffect, useRef } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { crop, fill } from "@cloudinary/url-gen/actions/resize";
import "./CarImage.scss";


type CarImageProps = {
  round: number;
  images: {
    imageFull: any;
    imageOne: string;
    imageTwo: string;
    imageThree: string;
    imageFour: string;
    imageFive: string;
  };
  coordinates: { x: number, y: number }
};
export default function CarImage({ round, images, coordinates }: CarImageProps) {
  const [imageModal, showImageModal] = useState(false);
  const [imageAnimation, setImageAnimation] = useState({
    1: "",
    2: "image--next",
    3: "image--next",
    4: "image--next",
    5: "image--next",
  });
  const [cldImageId, setCldImageId] = useState("")
  const [cldCroppedImg, setCldCroppedImg] = useState({ cldImageOne: "", cldImageTwo: "", cldImageThree: "", cldImageFour: "", cldImageFive: "", })

  const cld = useRef(
    new Cloudinary({
      cloud: {
        cloudName: `${process.env.REACT_APP_CLOUDNAME}`,
      },
    })
  ).current;

  let xCoord = coordinates.x / 1800
  let yCoord = coordinates.y / 1200



  useEffect(() => {
    // set images and transformed images in state from cloudinary transformations
    images.imageFull && setCldImageId(images.imageFull.provider_metadata.public_id)
    // crop transformation zooming out by 5% each iteration via width and height
    const cldImage20 = cld.image(cldImageId).resize(crop().width(0.2).height(0.2).aspectRatio("3:2").gravity("xy_center").x(xCoord).y(yCoord))
      .resize(fill().width('iw').height('ih')).toURL();

    const cldImage25 = cld.image(cldImageId).resize(crop().width(0.25).height(0.25).aspectRatio("3:2").gravity("xy_center").x(xCoord).y(yCoord))
      .resize(fill().width('iw').height('ih')).toURL()

    const cldImage30 = cld.image(cldImageId).resize(crop().width(0.3).height(0.3).aspectRatio("3:2").gravity("xy_center").x(xCoord).y(yCoord))
      .resize(fill().width('iw').height('ih')).toURL()

    const cldImage35 = cld.image(cldImageId).resize(crop().width(0.35).height(0.35).aspectRatio("3:2").gravity("xy_center").x(xCoord).y(yCoord))
      .resize(fill().width('iw').height('ih')).toURL()

    const cldImage40 = cld.image(cldImageId).resize(crop().width(0.4).height(0.4).aspectRatio("3:2").gravity("xy_center").x(xCoord).y(yCoord))
      .resize(fill().width('iw').height('ih')).toURL()

    setCldCroppedImg({ cldImageOne: cldImage20, cldImageTwo: cldImage25, cldImageThree: cldImage30, cldImageFour: cldImage35, cldImageFive: cldImage40, })
  }, [images, images.imageFull, cld, cldImageId, xCoord, yCoord])

  useEffect(() => {
    if (round !== 1 && imageAnimation[1] === "") {
      setImageAnimation({ ...imageAnimation, [1]: "image--slide-out" });
    }
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
          src={xCoord && yCoord ? cldCroppedImg.cldImageOne : images.imageOne}
          alt="car one"
          className={`image image--one ${imageAnimation[1]}`}
          onClick={() => showImageModal(true)}
        />
        {round >= 1 && (
          <img
            src={xCoord && yCoord ? cldCroppedImg.cldImageTwo : images.imageTwo}
            alt="car two"
            className={`image ${imageAnimation[2]}`}
            onClick={() => showImageModal(true)}
          />
        )}
        {round >= 2 && (
          <img
            src={xCoord && yCoord ? cldCroppedImg.cldImageThree : images.imageThree}
            alt="car three"
            className={`image ${imageAnimation[3]}`}
            onClick={() => showImageModal(true)}
            loading="lazy"
          />
        )}
        {round >= 3 && (
          <img
            src={xCoord && yCoord ? cldCroppedImg.cldImageFour : images.imageFour}
            alt="car four"
            className={`image ${imageAnimation[4]}`}
            onClick={() => showImageModal(true)}
            loading="lazy"
          />
        )}
        {round >= 4 && (
          <img
            src={xCoord && yCoord ? cldCroppedImg.cldImageFive : images.imageFive}
            alt="car five"
            className={`image ${imageAnimation[5]}`}
            onClick={() => showImageModal(true)}
            loading="lazy"
          />
        )}
        {round === 1 && (
          <p className="image__enlarge-message">tap to enlarge</p>
        )}
      </div>

      {imageModal && (
        <div className="image--modal" onClick={() => showImageModal(false)}>
          <img
            src={
              round === 1
                ? xCoord && yCoord ? cldCroppedImg.cldImageOne : images.imageOne
                : round === 2
                  ? xCoord && yCoord ? cldCroppedImg.cldImageTwo : images.imageTwo
                  : round === 3
                    ? xCoord && yCoord ? cldCroppedImg.cldImageThree : images.imageThree
                    : round === 4
                      ? xCoord && yCoord ? cldCroppedImg.cldImageFour : images.imageFour
                      : round === 5
                        ? xCoord && yCoord ? cldCroppedImg.cldImageFive : images.imageFive
                        : ""
            }
            alt="car full"
            className="image--modal-content"
          />
        </div>
      )}
    </div>
  );
}
