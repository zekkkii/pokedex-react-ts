import { FunctionComponent, lazy, Suspense, useEffect, useState } from "react";
import { CardSContainerProps } from "../../models/props/CardsContainerPorps";
const SideBarContainer = lazy(() => import("./SidebarContainer"));

interface Props {
  positionRight: number;
  positionTop: number;
  setShow: Function;
  data: CardSContainerProps;
}

const SideBar: FunctionComponent<Props> = ({
  positionTop,
  positionRight,
  setShow,
  data,
}) => {
  return (
    <div
      style={{ top: positionTop + "%", right: positionRight + "%" }}
      className={"sideBar"}
    >
      <Suspense fallback={<h1>Loading</h1>}>
        <SideBarContainer
          title={data.title}
          description={data.description}
          imgScr={data.imgScr}
          imgAlt={data.imgAlt}
          setShow={setShow}
        />
      </Suspense>
    </div>
  );
};

export default SideBar;
