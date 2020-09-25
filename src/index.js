import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// DON'T FORGET TO IMPORT BOOTSTRAP! This pulls in the bootstrap styles for each component.
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
