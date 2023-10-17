import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Wheel } from "react-custom-roulette";
import Swal from "sweetalert2";

function App() {
  const data = [
    { option: "Rifat" },
    { option: "Jasim" },
    { option: "Jasin" },
    { option: "Teebro" },
    { option: "Ibrahim" },
  ];
  const [names, setNames] = useState(data);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [addMode, setAddMode] = useState(false);
  const [newName, setNewName] = useState("");
  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * names.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  const handleUserAddMode = () => {
    setAddMode(true);
  };
  const handleUserAdd = () => {
    setNames((olddata) => [...olddata, { option: newName }]);
    setAddMode(false);
  };
  return (
    <div>
      <div className=" mx-auto my-auto row p-5 mt-5 ">
        <div className="row">
          <div className="col-6">
            <div className="col-12">
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={names}
                outerBorderColor={["#f2f2f2"]}
                outerBorderWidth={[0]}
                innerBorderColor={["#f2f2f2"]}
                radiusLineColor={["#FFFFFF"]}
                radiusLineWidth={[5]}
                textColors={["#ffffff"]}
                fontSize={[25]}
                innerRadius={[20]}
                disableInitialAnimation={[false]}
                pointerProps={{
                  style: {},
                }}
                textDistance={[80]}
                backgroundColors={[
                  "#F22B35",
                  "#F99533",
                  "#24CA69",
                  "#514E50",
                  "#46AEFF",
                  "#9145B7",
                ]}
                onStopSpinning={() => {
                  setMustSpin(false);
                  Swal.fire({
                    text: `"${data[prizeNumber].option}" is Winner!`,
                    showCloseButton: true,
                    showConfirmButton: false,
                  });
                }}
              />
            </div>

            <div className="row">
              <div className="col-2"></div>
              <div className="col-8 ml-5">
                <button
                  style={{ backgroundColor: "blue" }}
                  className="btn btn-primary mt-5 mr-2 px-5"
                  onClick={handleSpinClick}
                >
                  Spin it!
                </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            {addMode && (
              <>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <button
                  style={{ border: "none", backgroundColor: "white" }}
                  className="fw-bolder"
                  onClick={() => handleUserAdd()}
                >
                  Add Names
                </button>
              </>
            )}
            {!addMode && (
              <button
                style={{ border: "none", backgroundColor: "white" }}
                className="fw-bolder"
                onClick={() => handleUserAddMode()}
              >
                Add Names
              </button>
            )}
            <div className="name-container">
              <ul style={{ listStyleType: "none" }}>
                {names.map((name) => (
                  <li>{name.option}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
