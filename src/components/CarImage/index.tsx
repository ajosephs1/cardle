import "./CarImage.scss";
import Image1 from "../../data/images/bmwe301.png";
import Image2 from "../../data/images/bmwe302.png";
import Image3 from "../../data/images/bmwe303.png";
import Image4 from "../../data/images/bmwe304.png";
import Image5 from "../../data/images/bmwe305.png";

type CarImageProps = {
  round: number;
};
export default function CarImage({ round }: CarImageProps) {
  return (
    <div className="image--container">
      {
      round === 1 ? (<img src={Image1} alt="car image placeholder" className="image" />) :
      round === 2 ? (<img src={Image2} alt="car image placeholder" className="image" />) :
      round === 3 ? (<img src={Image3} alt="car image placeholder" className="image" />) : 
      round === 4 ? (<img src={Image4} alt="car image placeholder" className="image" />) : 
      round === 5 ? (<img src={Image5} alt="car image placeholder" className="image" />) : null
      }
    </div>
  );
}
