import React from "react";
import { useState } from "react";

export default function Index() {
  const [NameValue, setNameValue] = useState("Bajrangi");

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(NameValue);
    setNameValue("");
  };
  return (
    <>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="FirstName">FirstName</label>
        <input
          type="text"
          name="FirstName"
          id="FirstName"
          value={NameValue}
          onChange={(e) => {
            setNameValue(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
