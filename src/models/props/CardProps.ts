import { DetailedHTMLProps, HTMLAttributes, MouseEventHandler } from "react";

export default interface CardProps {
  id: number;
  title: string;
  description: string;
  imgScr: string;
  imgAlt: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}
