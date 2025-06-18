import React from "react";
import trisha from "../assets/trisha.png";

function Dummy() {
  return (
    <div>
      <center className="text-black h-screen flex items-center justify-center flex-col">
        <h2 className="font-bold text-3xl ">Vanakam nanbargale🙏</h2>
        <br></br>
        <p className="font-serif">
          ---by manojitbalasubramanian---<br></br>
          <br></br>
          website velai nandthutu iruku...<br></br>
          poi tea saptutu vanthu paarungga...<br></br>
        </p>
        <img src={trisha} alt="img" />
      </center>
    </div>
  );
}

export default Dummy;
