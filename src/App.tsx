import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/header/Navbar";
import Form from "./components/body/Form";
import CardsContainer from "./components/body/CardsContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Form />
      <CardsContainer />
    </div>
  );
}

export default App;
