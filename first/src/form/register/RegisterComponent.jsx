import React, { useState } from "react";
import CommonForm from "../common-form/CommonForm";
import { registerFormElement } from "../../config";

export default function RegisterComponent() {
  let [registerData, setRegisterData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register Data',registerData);
    setRegisterData('')
  };
  return (
    <>
      <h1>Register Page Component</h1>
      <CommonForm
        formControls={registerFormElement}
        handleSubmit={handleSubmit}
        formData={registerData}
        setFormData={setRegisterData}
        buttonText={'Register'}
      />
    </>
  );
}
