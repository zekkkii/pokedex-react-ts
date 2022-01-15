import { FunctionComponent } from "react";
import { ImgProps } from "../../models/InterfaceIndex";

const Img: FunctionComponent<ImgProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default Img;
