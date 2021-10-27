import React, { useState } from "react";
import "../Stylesheets/Bathtub.css";
import WaterDiv from "./WaterDiv";

let interval1;
let interval2;
let removeButton = document.querySelector(".drain-water");
const Bathtub = (props) => {
  const [waterDivs, setWaterDivs] = useState([]);

  const increaseWaterLevel = () => {
    interval2 = setInterval(
      function () {
        if (waterDivs.length <= 4) {
          setWaterDivs([...waterDivs, waterDivs.push(1)]);
        } else return;
      },
      [2000]
    );
  };

  const decreaseWaterLevel = () => {
    interval1 = setInterval(
      function () {
        if (waterDivs.length > 0) {
          setWaterDivs((prevState) => prevState.slice(1));
        } else return;
      },
      [2000]
    );
  };

  if (waterDivs.length === 0) {
    clearInterval(interval1);
  }
  if (waterDivs.length === 5) {
    clearInterval(interval2);
  }

  console.log(waterDivs);
  return (
    <>
      <div className="buttons-container">
        <button className="add-water" onClick={increaseWaterLevel}>
          Add Water
        </button>
        <button className="drain-water" onClick={decreaseWaterLevel}>
          Drain Water
        </button>
      </div>
      <div className="bathtub">
        {waterDivs.length > 0 ? waterDivs.map((water) => <WaterDiv />) : ""}
      </div>
    </>
  );
};

export default Bathtub;
