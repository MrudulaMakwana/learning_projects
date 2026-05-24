import React from "react";
import { NavLink } from "react-router-dom";

export default function DashboardNav() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="courses">Courses</NavLink>
        </li>
        <li>
          <NavLink to="tasks">Tasks</NavLink>
        </li>
        <li>
          <NavLink to="feedbacks">Feedbacks</NavLink>
        </li>
      </ul>
    </>
  );
}
