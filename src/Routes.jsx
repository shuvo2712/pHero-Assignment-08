import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./Components/ErrorPage";
import HomePage from "./Components/HomePage";
import AppsPage from "./Components/AppsPage";
import InstallationPage from "./Components/InstallationPage";
import AppDetailsPage from "./Components/AppDetailsPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    // (Copied for Console Error)
    HydrateFallback: () => (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    ),

    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
        loader: () => fetch("/appsData.json"),
      },
      {
        path: "apps",
        element: <AppsPage />,
        loader: () => fetch("/appsData.json"),
      },
      {
        path: "installation",
        element: <InstallationPage />,
        loader: () => fetch("/appsData.json"),
      },
      {
        path: "apps/:id",
        Component: AppDetailsPage,
        loader: async ({ params }) => {
          const res = await fetch("/appsData.json");
          const apps = await res.json();
          const app = apps.find(
            (a) => a.id === parseInt(params.id) || a.id === params.id
          );
          // ✅ Instead of throwing, return null to handle gracefully inside page
          return app || null;
        },
      },
    ],
  },
]);

export default Routes;
