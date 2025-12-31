import React, { FC } from "react";

interface PreProps {
  load: boolean;
}

const Pre: FC<PreProps> = ({ load }) => {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
};

export default Pre;
