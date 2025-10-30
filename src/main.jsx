import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Routes from "./Routes";
import { InstallProvider } from "./Context/InstallContext";  


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstallProvider>
      <RouterProvider router={Routes} />
    </InstallProvider>
  </StrictMode>
);
