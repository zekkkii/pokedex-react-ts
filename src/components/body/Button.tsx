import { FunctionComponent } from "react";
import { ButtonProps } from "../../models/InterfaceIndex";

const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  className,
  text,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
