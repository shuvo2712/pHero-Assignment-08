import React, { useState } from "react";
import { Star, Download } from "lucide-react";
import { useContext } from "react";
import { InstallContext } from "../Context/InstallContext";

const InstalledApp = ({ app }) => {
  const { uninstallApp } = useContext(InstallContext);

  return (
    <div className="bg-white rounded-lg shadow m-4 p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={app.image}
          alt={app.title}
          className="w-12 h-12 object-cover rounded-md"
        />
        <div>
          <h2 className="font-bold">{app.title}</h2>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Download className="w-4 h-4 text-green-500" />
            <span>{app.size} MB</span>
            <Star className="w-4 h-4 text-yellow-400" />
            <span>{app.ratingAvg}</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => uninstallApp(app.id)}
        className="btn bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledApp;
