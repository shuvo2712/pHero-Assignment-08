import React from "react";
import { Star, Download } from "lucide-react";
import { Link } from "react-router-dom";

const App = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`}>
      <div className="bg-white rounded-md p-2 flex flex-col items-center shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-shadow duration-300">
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
            <span>{app.downloads / 1000000}M</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-orange-500" />
            <span>{app.ratingAvg}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default App;
