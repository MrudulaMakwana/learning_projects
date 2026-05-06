import React, { useState } from "react";

export default function Login({handleLogin}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
 
    e.preventDefault();
    console.log("form submitted","Email: ",email, " Password : ",password);
    handleLogin(email,password);
    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-8">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
          name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 text-xl placeholder:text-gray-400 mt-3"
            type="email"
            placeholder="Enter your Email"
            required
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 text-xl placeholder:text-gray-400 mt-3"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
          />
          <button
            className="text-white bg-emerald-600 rounded-full py-4 px-10 text-xl mt-5"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
