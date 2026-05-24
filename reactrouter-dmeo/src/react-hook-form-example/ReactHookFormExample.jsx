import React from "react";

export default function ReactHookFormExample() {
  return <>
  <h1>React Hook form</h1>
  <form action="">
    <label htmlFor="name">Email</label>
    <input type="email" name="email" id="email" />
    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password" />
    <button type="submit">Submit</button>
  </form>
  </>;
}
