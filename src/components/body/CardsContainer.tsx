import {
  FunctionComponent,
  lazy,
  Suspense,
  SyntheticEvent,
  useState,
} from "react";
import { CardSContainerProps } from "../../models/props/CardsContainerPorps";
import SideBar from "./Sidebar";
const Card = lazy(() => import("./Card"));

const data: CardSContainerProps[] = [
  {
    id: 1,
    title: "string",
    description: "string",
    imgScr: "string",
    imgAlt: "string",
  },
  {
    id: 1,
    title: "string",
    description: "string",
    imgScr: "string",
    imgAlt: "string",
  },
  {
    id: 1,
    title: "string",
    description: "string",
    imgScr: "string",
    imgAlt: "string",
  },
  {
    id: 1,
    title: "string",
    description: "string",
    imgScr: "string",
    imgAlt: "string",
  },
  {
    id: 1,
    title: "string",
    description: "string",
    imgScr: "string",
    imgAlt: "string",
  },
  {
    id: 1,
    title: "string",
    description: "string",
    imgScr: "string",
    imgAlt: "string",
  },
];

const CardsContainer: FunctionComponent = () => {
  const [showSidebar, setShowSideBar] = useState<boolean>(false);
  const [sideBarData, setSideBarData] = useState<CardSContainerProps>({
    id: 0,
    title: "",
    description: "",
    imgScr: "",
    imgAlt: "",
  });

  const handleClickOnDiv = (e: SyntheticEvent<HTMLElement>) => {
    const id = e.currentTarget.dataset.id;
    setSideBarData(data.find((elem) => elem.id == id));

    setShowSideBar(true);
    console.log(sideBarData);
  };
  return (
    <div className="cardsContainer">
      <Suspense fallback={<h1>Loading...</h1>}>
        {data &&
          data.map((elem, i) => (
            <Card
              key={i}
              id={elem.id}
              title={elem.title}
              description={elem.description}
              imgScr={elem.imgScr}
              imgAlt={elem.imgAlt}
              onClick={handleClickOnDiv}
            />
          ))}
      </Suspense>

      <SideBar
        setShow={setShowSideBar}
        positionTop={4}
        positionRight={showSidebar ? 0 : -200}
        data={sideBarData}
      />
    </div>
  );
};

export default CardsContainer;
