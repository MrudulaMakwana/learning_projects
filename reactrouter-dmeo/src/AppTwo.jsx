import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Tasks from "./pages/Tasks";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";
import Navbar from "./pages/Navbar";
import LayoutTwo from "./LayoutTwo";

export default function AppTwo() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutTwo />,
      children: [
        {path:'home',element:<Home/>},
        { path: "about", element: <About /> },
        {
          path: "dashboard",
          element: <Dashboard />,
          children: [
            { path: "courses", element: <Courses /> },
            { path: "tasks", element: <Tasks /> },
            { path: "feedbacks", element: <Feedback /> },
          ],
        },
      ],
    },

    { path: "*", element: <NotFound /> },
  ]);
  return <RouterProvider router={router} />;
}
