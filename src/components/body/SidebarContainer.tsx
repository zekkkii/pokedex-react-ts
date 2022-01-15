import { FunctionComponent, lazy } from "react";
import { SideBarProps } from "../../models/InterfaceIndex";
const Button = lazy(() => import("./Button"));
const Img = lazy(() => import("./Img"));

const SideBarContainer: FunctionComponent<SideBarProps> = ({
  title,
  description,
  imgScr,
  imgAlt,
  setShow,
}) => {
  const closeSideBar = () => {
    return setShow((prevValue: any) => !prevValue);
  };
  return (
    <div>
      <Button text={"Close"} className={"closeButton"} onClick={closeSideBar} />
      <div>
        <Img src={imgScr} alt={imgAlt} />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SideBarContainer;
