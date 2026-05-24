import React from "react";
import styled from "./ContactForm.module.css";
import Button from "./Button";
import { MdOutlineMessage } from "react-icons/md";

export default function ContactForm() {
  return (
    <>
      <section className={styled.container}>
        <div className={styled.contact_form}>
          <div className={styled.top_button}>
            <Button
              text=" VIA SUPPORT CHAT"
              icon={<MdOutlineMessage fontSize="24px" />}
            />
            <Button
              text="VIA CALL"
              icon={<MdOutlineMessage fontSize="24px" />}
            />
          </div>
          <Button
                isoutline={true}
              text=" VIA EMAIL FORM"
              icon={<MdOutlineMessage fontSize="24px" />}
            />
            <form action="">

                <div className={styled.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                </div>
                <div className={styled.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                </div>
                <div className={styled.form_control}>
                <label htmlFor="text">Text</label>
                <textarea name="text" rows={8}></textarea>
                </div>
              <div style={{
                display:'flex',
                justifyContent:'end'
              }}>
              <Button text="SUBMIT"/>
              </div>
            </form>
        </div>
        <div className={styled.contactImage}>
            <img src="contact.svg" alt="Service Image" />
        </div>
      </section>
    </>
  );
}
