import { useState } from "react";
import "./App.css";
import PracticeOne from "./PracticeOne";
import FlexBox from "./FlexBox";
import FlexBoxPractice from "./FlexBoxPractice";
import GridBox from "./GridBox";
import Responsive from "./Responsive";
import RealComponent from "./RealComponent";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <>
      <h1 className="bg-red-100 text-blue">HElllo</h1>
      <div className="p-2 border-2">Small Padding</div>
      <div className="p-4 border-2 m-2">Medium Padding with margin</div>
      <div className="p-6 border-2 m-10">Large Padding with margin</div>

      {/* Class	   Meaning
p-x	        left + right padding
p-y	        top + bottom padding
m-x	       left + right margin
m-y	       top + bottom margin */}

      <div className="px-3 py-4 bg-amber-400">
        Horizontal + Vertical Padding
      </div>

      {/* 2. Colors

Tailwind uses a simple pattern:

color-shade

Example:

blue-500
red-400
green-600 */}
      <p className="text-red-500">Lorem ipsum dolor sit amet consectetur.</p>
      <p className="text-blue-500">Lorem ipsum dolor sit amet consectetur.</p>
      <p className="text-white bg-amber-900">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <p className="text-grey">Lorem ipsum dolor sit amet consectetur.</p>

      {/* 
      Simple rule:
Class	  Size
text-sm	small
text-base	normal
text-xl	large
text-3xl	heading
      */}

      <p className="text-sm mt-3">Small text</p>
      <p className="text-base">Normal text</p>
      <p className="text-xl">Large text</p>
      <p className="text-3xl">Very large text</p>

      <div className="border p-4">Simple border</div>

      <div className="border-2 border-red-300 m-2">Red Border</div>

      <div className="border rounded-lg m-4">Rounded Border</div>
      {/* 5. Width & Height */}
      <div className="w-30 h-30 border bg-green-400 rounded-lg">Box</div>

      <div className="w-full h-30 bg-purple-500 border-2 my-3">
        Full width Box
      </div>

      {/* <PracticeOne /> */}
      {/* <FlexBox /> */}

      {/* <FlexBoxPractice/> */}
      <GridBox/>
      {/* <Responsive/> */}
      {/* <RealComponent/> */}
      {/* <Login/> */}
      {/* <Dashboard/> */}
    </>
  );
}

export default App;
