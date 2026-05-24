import React from "react";

const FlexBoxPractice = () => {
  return (
    <>
      <div className="mt-20 bg-gray-200 h-[300px] ">
         <h1 className="text-2xl mb-6">Login box</h1>
        <div className="flex justify-center items-center gap-4 h-screen">
           <button className="bg-blue-300 cursor-pointer font-bold border border-amber-300 p-3">Login</button>         
           <button className="cursor-pointer bg-amber-700 font-bold border border-amber-500 p-3">Cancle</button>
        </div>
      </div>
    </>
  );
};

export default FlexBoxPractice;
