import React from "react";
import { useState, useEffect } from "react";
import "./chart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function Chart({ rotateValue, value, stars }) {
  const [rotate, setRotate] = useState(10);
  useEffect(() => {
    setRotate(rotateValue);
  }, [rotateValue]);
  return (
    <>
      <div
        className={`blue-board px-[15px] py-[5px] shadow-xl rotate-[${rotate}deg] mx-[25px]`}
      >
        <div className="blue-stand blue-center"></div>
        <div>
          <h1 className="font-medium text-[2rem] mb-[-15px]">{value}</h1>
        </div>
      </div>
      <div className="mt-[7rem]">
        {[...Array(stars)].map((e, i) => (
          <FontAwesomeIcon
            key={i}
            icon="star"
            className="font-black"
            style={{ color: "yellow", height: "1.5rem", width: "1.5rem" }}
          />
        ))}
      </div>
    </>
  );
}

export default Chart;
