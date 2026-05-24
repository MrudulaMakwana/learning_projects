import React from "react";
import Header from "../common/Header";
import CreateTask from "../common/CreateTask";
import AllTask from "../common/AllTask";

export default function AdminDashboard(props) {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
}
