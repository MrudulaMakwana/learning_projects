import React from "react";
import { useState } from "react";
import Logout from "./Logout";
import Login from "./Login";

export default function ConditionalRenderingDemo() {
  const [loggedIn, setloggedIn] = useState(false);
//   if (loggedIn) {
//     return <Logout />;
//   } else {
//     return <Login />;
//   }
if(!loggedIn)
{
    return <Login/>
}
  return (
    <div>
      <h1>ConditionalRenderingDemo</h1>
      {/* {loggedIn ? <Logout/>:<Login/>} */}
      {loggedIn && <Logout/>}
    </div>
  );
}
