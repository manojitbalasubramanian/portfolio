import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Security from './components/Security';
import Private from './components/Private';
import Projects from './components/projects';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter basename="/portfolio">
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/security" element={<Security />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/asdfasdgbsjhfdbgehhuiaedgjdvbaeyiggfqehbghidgbuo9W3UR9034YT7USGHBAFJBARJIFHOQRBBGLJKAFBUOIOIOEBRGNKGERBGU" element={<Private />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
