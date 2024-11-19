import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/farhannawazofficial">
          Download Source Code (github.com/farhannawazofficial)
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://farhan-nawaz.web.app/">
          Farhan Nawaz
        </a>{" "}
        {/* | Powered by{" "} */}
        <a target="_blank" href="https://www.htmlhints.com/">
          {/* HTML HINTS */}
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
