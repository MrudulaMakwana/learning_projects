import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <DashboardNav/>
      <Outlet />
    </div>
  );
}
