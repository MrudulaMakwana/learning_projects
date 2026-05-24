import { useState } from "react";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import FeedBack from "./FeedBack";
import Home from "./Home";
import AppLayout from "./AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/feedback", element: <FeedBack /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
