import React, { useEffect, useState, useContext } from "react";
import InstalledApp from "./InstalledApp";
import { InstallContext } from "../Context/InstallContext";

const InstallationPage = () => {
  const { installedApps } = useContext(InstallContext);
  const [sortBy, setSortBy] = useState("default");
  const [sortedApps, setSortedApps] = useState(installedApps || []);

  // Always sync sortedApps with installedApps
  useEffect(() => {
    let sorted = [...installedApps];
    if (sortBy === "size") {
      sorted.sort((a, b) => a.size - b.size);
    } else if (sortBy === "rating") {
      sorted.sort((a, b) => b.ratingAvg - a.ratingAvg);
    }
    setSortedApps(sorted);
  }, [installedApps, sortBy]);

  // Handle sorting
  const handleSortChange = (e) => {
    const sortOption = e.target.value;
    setSortBy(sortOption);
  };

  return (
    <div className="bg-[#F1F5E8] min-h-[calc(100vh-160px)]">
      <div className="text-center p-5">
        <h1 className="text-3xl font-bold mb-2">Your Installed Apps</h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {/* Sort by and apps count */}
      <div className="flex justify-between items-center p-5">
        <h6 className="font-semibold">{sortedApps.length} Apps Found</h6>
        <select
          className="border px-2 py-1 rounded text-gray-700"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="default">Sort By Default</option>
          <option value="size">Sort By Size</option>
          <option value="rating">Sort By Rating</option>
        </select>
      </div>
      {/* Installed apps */}
      <div>
        {/* DYNAMIC DATA */}
        {sortedApps.length === 0 ? (
          <div className="text-center p-5 text-gray-500">
            No apps installed.
          </div>
        ) : (
          sortedApps.map((app) => <InstalledApp app={app} key={app.id} />)
        )}
      </div>
    </div>
  );
};

export default InstallationPage;
