"use strict";
import Title from "./app";
import React from "react";
import ReactDOM from "react-dom";

console.log("Olá, server on-line... ");
ReactDOM.render(<Title />, document.querySelector('[data-js="app"]'));
