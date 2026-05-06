import React, { useState } from "react";
import styled from "styled-components";

export default function NumberSelector({
  selectdNumber,
  setSelectdNumber,
  error,
  setError,
}) {
  const array = [1, 2, 3, 4, 5, 6];
  const numberslcHandler = (value) => {
    setSelectdNumber(value);
    setError("");
  };

  console.log(selectdNumber);
  return (
    <>
      <NumberSelectorContainer>
        <p className="error">{error}</p>
        <div className="flex">
          {array.map((value, inx) => {
            return (
              <Box
                key={inx}
                isSelected={value === selectdNumber}
                onClick={() => numberslcHandler(value)}
              >
                {value}
              </Box>
            );
          })}
        </div>
        <p>Select Number</p>
      </NumberSelectorContainer>
    </>
  );
}

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  .error {
    color: red;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
