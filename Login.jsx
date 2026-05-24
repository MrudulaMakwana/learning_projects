import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black/30 backdrop-blur-sm">
        <div className="bg-white p-8 rounded-xl shadow-lg w-80">
          <h1 className="text-2xl mb-6 text-center">Login</h1>
          <input type="email" name="email" placeholder="Email" className="w-full rounded-2xl mb-4 p-2 border" />
          <input type="password" name="password" placeholder="Password" className="w-full focus:ring-2 focus:ring-blue-400 outline-nonefocus:ring-2 focus:ring-blue-400 outline-none rounded-2xl mb-4 p-2 border"/>
          <button className="bg-blue-300 text-white rounded-2xl text-lg p-3 m-2 border border-amber-300 hover:bg-black transition-all cursor-pointer">Submit </button>
        </div>

      </div>
    </>
  );
};

export default Login;
