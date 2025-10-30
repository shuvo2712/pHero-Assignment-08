import React, { useEffect, useState, useContext } from "react";
import InstalledApp from "./InstalledApp";
import { InstallContext } from "../Context/InstallContext";
import { ToastContainer } from "react-toastify";

const InstallationPage = () => {
  const { installedApps } = useContext(InstallContext);
  const [sortBy, setSortBy] = useState("default");
  const [sortedApps, setSortedApps] = useState(installedApps || []);

  // Always sync sortedApps with installedApps
  useEffect(() => {
    let sorted = [...installedApps];
    if (sortBy === "highToLow") {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === "lowToHigh") {
      sorted.sort((a, b) => a.downloads - b.downloads);
    }
    setSortedApps(sorted);
  }, [installedApps, sortBy]);

  // Handle sorting
  const handleSortChange = (e) => {
    const sortOption = e.target.value;
    setSortBy(sortOption);
  };

  return (
    <div className="bg-[#F1F5E8] p-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-2">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      {/* {} Apps, Sort by */}
      <div className="flex justify-between items-center py-5">
        <div>
          <h4>({sortedApps.length}) Apps Installed</h4>
        </div>
        {/* Sort By */}
        <div>
          <select
            className="border border-gray-300 px-2 py-1 rounded text-gray-700"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="default">Sort By Default</option>
            <option value="highToLow">Sort by Downloads (High-Low)</option>
            <option value="lowToHigh">Sort by Downloads (Low-High)</option>
          </select>
        </div>
      </div>

      {/* Installed apps */}
      <div>
        {/* DYNAMIC DATA */}
        {sortedApps.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-gray-500">
              <i className="fa-solid fa-triangle-exclamation"></i> No App
              Installed
            </h3>
          </div>
        ) : (
          <div className="space-y-4 px-5">
            {sortedApps.map((app) => (
              <InstalledApp app={app} key={app.id} />
            ))}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default InstallationPage;
