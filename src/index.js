import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import App from "./App";
import "./index.css";

import { ExpenseTrackerProvider } from "./context/context";

ReactDOM.render(
  <SpeechProvider appId="d80722e5-f96d-4225-897f-88dae7975e2e" language="en-US">
    <ExpenseTrackerProvider>
      <App />
    </ExpenseTrackerProvider>
  </SpeechProvider>,
  document.getElementById("root")
);
