import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "./Root";
import ErrorPage from "./Components/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement: <ErrorPage></ErrorPage>
  },
]);

export default Routes;
