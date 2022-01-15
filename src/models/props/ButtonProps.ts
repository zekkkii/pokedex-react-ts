import { MouseEventHandler } from "react";

export default interface ButtonProps {
    text: string
    className: string
    onClick:  MouseEventHandler<HTMLButtonElement>
}