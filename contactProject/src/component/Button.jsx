import React from "react";

import { FaBeer } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import styled from "./Button.module.css";

export default function Button({text,icon,isoutline}) {
  return (
    <button className={isoutline ? styled.outline_btn:styled.primary_btn}>
      {icon}
      {text}
    </button>
  );
}
