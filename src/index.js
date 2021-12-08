import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./Components/App";
import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Header from "./Components/Header";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/" exact>
      <App />
    </Route>
  </BrowserRouter>,
  rootElement
);
