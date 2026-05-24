import React, { useState } from "react";
import styled from "styled-components";

export default function RoleDice({ currentDice, roleDice }) {
  
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/img/${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}
const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
