import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Temp1 from "./views/main/Temp1";
import Tt from "./views/tt/Tt";
import Temp2 from "./views/main/Temp2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Temp1 />} />
        <Route path="/app" element={<App />} />
        <Route path="/temp2" element={<Temp2 />} />
        <Route path="/tt" element={<Tt />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
