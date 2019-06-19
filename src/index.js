import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import AppClass from "./00-react-class";
import AppHooksExercise from "./01-react-hook.exercise";
import AppHooksExercise2 from "./02-react-hook.exercise";

const exerciseNumber = 0;
const exercise = [
  <AppClass />, // DEFAULT CLASS EXAMPLE
  <AppHooksExercise />,
  <AppHooksExercise2 />
];

const rootElement = document.getElementById("root");
ReactDOM.render(exercise[exerciseNumber], rootElement);
