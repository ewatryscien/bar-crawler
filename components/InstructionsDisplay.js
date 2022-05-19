import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const InstructionsDisplay = ({ bars, time, handleClickNext }) => {
  const [barIndex, setBarIndex] = useState(0);
  function nextBar() {
    if (barIndex < bars.length - 1) {
      setBarIndex(++barIndex);
      handleClickNext(barIndex);
    } else {
      console.log("koniec");
    }
  }
  return (
    <div className="instructions-block">
      <h2>Teraz:</h2>
      <h4>{bars[barIndex].name}</h4>
      <h2>{barIndex < bars.length - 1 ? `Następny bar:` : "Koniec"}</h2>
      <h4>{barIndex < bars.length - 1 ? bars[barIndex + 1].name : ""}</h4>
      <h5>
        {barIndex < bars.length - 1
          ? `Czas przejścia: ok. ${time[barIndex]} min.`
          : ""}
      </h5>

      <Button
        onClick={nextBar}
        className={`next-button ${barIndex < bars.length - 1 ? "" : "hidden"}`}
        variant="primary"
        type="submit"
      >
        Dalej
      </Button>
    </div>
  );
};

export default InstructionsDisplay;
