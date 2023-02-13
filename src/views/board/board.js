import React from "react";
import "./board.css";

function Boared() {
  return (
    <>
      <div className="green-board px-[15px] py-[5px] shadow-xl">
        <div className="stand left"></div>
        <div className="line left-to-center"></div>
        <div className="stand center"></div>
        <div className="line center-to-right"></div>
        <div className="stand right"></div>
        <div>
          <h1 className="font-medium text-[2rem] mb-[-15px]">
            Var not defined
          </h1>
          <p className="text-[2rem]">(Python)</p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          bibendum tincidunt est.
        </div>
      </div>
    </>
  );
}

export default Boared;
