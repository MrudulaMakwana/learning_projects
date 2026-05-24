import React, { useState } from "react";
import CommonForm from "../common-form/CommonForm";
import { loginFormElement } from "../../config";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
let handleSubmit=(event)=>{
event.preventDefault();
console.log('login data ',loginForm);
setLoginForm('')
}

  return (
    <>
      <h1>Login Component</h1>
      <CommonForm
        formData={loginForm}
        setFormData={setLoginForm}
        formControls={loginFormElement}
        buttonText='Login'
        handleSubmit={handleSubmit}
      />
    </>
  );
}
