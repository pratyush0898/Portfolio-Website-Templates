import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Site from "./data/site.js";
import Card from "./Components/Card/Card.jsx";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="container">
          {Site.map((site, index) => (
            <Card img={site.screenshot} text={site.name} Link={site.url} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
