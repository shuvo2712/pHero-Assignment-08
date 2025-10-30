import React from "react";
import { Link } from "react-router-dom";
import SingleApp from "./SingleApp";

const TrendingApps = ({ apps }) => {
  return (
    <div>
      <section className="p-10 w-full text-center bg-[#F1F5E8]">
        {/* header */}
        <div>
          <h2 className="font-semibold">Trending Apps</h2>
          <p className="text-gray-500">
            Explore All Trending Apps on the Market Developed By Us
          </p>
        </div>
        {/* Dynamic app list */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
          {apps.slice(0, 8).map((app) => (
            <SingleApp app={app} key={app.id}></SingleApp>
          ))}
        </div>
        {/* show all */}
        <div>
          <Link
            to="/apps"
            className="btn text-white rounded-md bg-gradient-to-r from-[#632ee3] to-[#9f62f2] mt-10 px-5"
          >
            Show All Apps
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TrendingApps;
