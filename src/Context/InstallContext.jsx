import React, { createContext, useState, useEffect } from "react";

export const InstallContext = createContext();

export const InstallProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  // Load installed apps from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("installedApps");
    if (saved) setInstalledApps(JSON.parse(saved));
  }, []);

  // Save installed apps whenever updated
  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }, [installedApps]);

  // Install app
  const installApp = (app) => {
    if (!installedApps.find((a) => a.id === app.id)) {
      setInstalledApps([...installedApps, app]);
    }
  };

  // Uninstall app
  const uninstallApp = (app) => {
    setInstalledApps((prev) => prev.filter((a) => a.id !== app.id));
  };


  return (
    <InstallContext.Provider
      value={{ installedApps, installApp, uninstallApp }}
    >
      {children}
    </InstallContext.Provider>
  );
};
