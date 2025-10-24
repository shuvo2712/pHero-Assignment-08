import React from "react";
import { Star, Download } from "lucide-react";

const App = ({ app }) => {
  return (
      <div className="border rounded-md p-2 flex flex-col items-center shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
        {/* app image */}
      <img
        src={app.image}
        alt={app.title}
        className="w-full h-32 object-cover rounded-md mb-2"
      />

      {/* app title */}
      <h5 className="font-semibold text-center mb-1">{app.title}</h5>

      {/* Downloads and Rating */}
      <div className="flex justify-between w-full text-xs text-gray-500 mt-auto">
        <div className="flex items-center gap-1">
          <Download className="w-3 h-3 text-green-500" />
          <span>{app.downloads}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 text-orange-400" />
          <span>{app.ratingAvg}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
