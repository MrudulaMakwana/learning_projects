import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";

export default function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectdNumber, setSelectdNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectdNumber) {
      setError("You have not select any number");
      return;
    }
    setError("")
    const randoNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randoNumber);

    if (selectdNumber === randoNumber) {
      setScore((prev) => prev + randoNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectdNumber(undefined);
  };

  return (
    <>
      <Main>
        <div className="top_section">
          <TotalScore score={score} />
          <NumberSelector
          error={error}
          setError={setError}
            selectdNumber={selectdNumber}
            setSelectdNumber={setSelectdNumber}
          />
        </div>
        <RoleDice
          currentDice={currentDice}
          roleDice={roleDice}
        />

      </Main>
    </>
  );
}
const Main = styled.main`
  padding-top: 30px;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-item: end;
  }
`;
