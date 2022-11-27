import React from "react";
import "./assets/styles/css/routes.css";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Resume from "./pages/Resume/Resume";

export const Routes = (props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Resume />,
      errorElement: <ErrorPage />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
