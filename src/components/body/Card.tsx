import { FunctionComponent } from "react";

import Img from "./Img";
import { CardProps } from "../../models/InterfaceIndex";

const Card: FunctionComponent<CardProps> = ({
  id,
  title,
  description,
  imgScr,
  imgAlt,
  onClick,
}) => {
  return (
    <div data-id={id} onClick={onClick} className="card">
      <Img src={imgScr} alt={imgAlt} />
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default Card;
