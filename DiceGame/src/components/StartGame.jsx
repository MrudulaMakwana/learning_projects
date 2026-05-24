import React from "react";
import styled from "styled-components";

export default function StartGame({toggle}) {
  return (
    <>
      <Container>
        <div>
          <img src="/img/dices 1.png" alt="" />
        </div>
        <div className="content">
          <h1>Dice Game</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </>
  );
}
const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
const Button = styled.button`
color:white;
padding:10px 108px;
background:#000000;
border-radius:5px;
min-width:220px;
border:none;
font-size:16px;
cursor:pointer;
transition:0.4s background ease-in;
border:1px solid transparent;

&:hover{
background-color:white;
border:1px solid black;
color:black;
transition:0.3s background ease-in;
}

`;
