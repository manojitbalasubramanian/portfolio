import React, { FC } from "react";
import Typewriter from "typewriter-effect";

const Type: FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN Stack Developer",
          "Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
