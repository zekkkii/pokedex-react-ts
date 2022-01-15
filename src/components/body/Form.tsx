import { FunctionComponent } from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";

const Form: FunctionComponent = () => {
  return (
    <div>
      <form>
        <SearchBar placeHolder="Type here" />
        <Button text="Search" onClick={() => {}} className="button" />
      </form>
    </div>
  );
};

export default Form;
