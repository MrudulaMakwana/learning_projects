import React, { useContext } from "react";
import { GlobalContext } from "../DemoContext";

export default function Text() {
  const { theme } = useContext(GlobalContext);
  console.log(theme);

  return (
    <>
      <h1
        style={{
          fontSize: theme === "light" ? "50px" : "100px",
          backgroundColor: theme === "dark" ? "#fff" : "#000",
          color: theme === "light" ? "blue" : "yellow",
          padding:'20px'
        }}
      >
        Jay Bajrangi
      </h1>
    </>
  );
}
