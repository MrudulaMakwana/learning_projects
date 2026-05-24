import React from "react";
import CommonInpt from "../common-input/CommonInpt";

export default function CommonForm({ formControls = [], formData, setFormData,buttonText ,handleSubmit}) {
  const formTypes = {
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea",
  };

  function renderFormElement(getCurrentElement) {
    let content = null;
    switch (getCurrentElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInpt
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            type={getCurrentElement.type} // ✅ Added type
            value={formData[getCurrentElement.name] || ""}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        );
        break;
      default:
        content = (
          <CommonInpt
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            type={getCurrentElement.type} // ✅ Added type
            value={formData[getCurrentElement.name] || ""}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        );
        break;
    }
    return content;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formControls?.length
          ? formControls.map((singleFormElementItem) =>renderFormElement(singleFormElementItem)
            )
          : null}
          <div style={{marginTop:'12px'}}>
            <button type="submit">{buttonText || 'Submit'}</button>
          </div>
      </form>
    </>
  );
}
