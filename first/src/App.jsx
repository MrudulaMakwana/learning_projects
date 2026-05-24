import { useState } from "react";
import UserList from "./useEffect/UserList";
import DemoContext from "./context/DemoContext";
import Button from "./context/components/Button";
import Text from "./context/components/Text";
import DemoReducer from "./reducer/DemoReducer";
import Index from "./context/Index";
import Login from "./form/login/Login";
import RegisterComponent from "./form/register/RegisterComponent";
import ConditionalRenderingDemo from "./ConditionalRenderingDemo";
  
function App() {
  return (
    <>
      {/* <Index /> */}
      {/* <UserList/> */}
      {/* <Index /> */}
      {/* <DemoReducer/> */}
      {/* <Index/> */}
  
      {/* <div style={{display:'flex',gap:'20px'}}>
        <Login />
        <RegisterComponent /> 
         </div> */}
         <ConditionalRenderingDemo/>
    </>
  );
}

export default App;
