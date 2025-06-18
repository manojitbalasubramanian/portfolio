import React from "react";
import Dummy from "./components/Dummy";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function MainPage() {
  return (
    <>
      <Toaster />
      <NavBar />
      <Dummy />
      <Content />
      <Footer />
    </>
  );
}

export default MainPage;
