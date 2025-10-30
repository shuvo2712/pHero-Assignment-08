import React from "react";
import { Star, Download, File } from "lucide-react";
import { useContext } from "react";
import { InstallContext } from "../Context/InstallContext";
import { toast } from "react-toastify";

const InstalledApp = ({ app }) => {
  const { uninstallApp } = useContext(InstallContext);
  const handleUninstall = () => {
    uninstallApp(app);
    toast(`${app.title} has been uninstalled successfully!`);
  };

  return (
    <div className="bg-white rounded-lg shadow p-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div>
          <img
            src={app.image}
            alt={app.title}
            className="w-12 h-12 object-cover rounded-md"
          />
        </div>
        <div>
          <h5>{app.title}</h5>
          {/* stats */}
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <Download className="w-4 h-4 text-green-500" />
              <span>{app.size} MB</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>{app.ratingAvg}</span>
            </div>
            <div className="flex items-center gap-1">
              <File className="w-4 h-4 text-blue-400" />
              <span>{app.size} MB</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleUninstall}
        className="btn bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledApp;
