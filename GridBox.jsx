import React from "react";

const GridBox = () => {
  return (
    <>
      <div className="bg-gray-300 py-3">
        <h1 className="text-3xl font-bold text-black">Products</h1>
        <div className="grid grid-cols-3 gap-10 border-2 border-amber-300">
          <div className="bg-blue-300 p-4 rounded-lg shadow">product1</div>
          <div className="bg-green-400 p-4 rounded-2xl shadow-lg col-span-2">
            Product2
          </div>
          <div>Product3</div>
          <div>
            Product4
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-300 p-6 col-span-2">Box 1</div>
              <div className="bg-red-300 p-6">Box 2</div>
              <div className="bg-green-300 p-6">Box 3</div>
              <div className="bg-yellow-300 p-6">Box 4</div>
            </div>
          </div>
          <div>Product5</div>
          <div className="col-span-3 border-">Product6</div>
          <div>Product7</div>
          <div>Product8</div>
        </div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-6 rounded-xl shadow-md w-80">
            <input
              placeholder="Email"
              className="w-full border p-2 rounded mb-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              placeholder="Password"
              type="password"
              className="w-full border p-2 rounded mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button className="w-full bg-blue-500 hover:bg-blue-600 active:scale-95 transition text-white py-2 rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridBox;
