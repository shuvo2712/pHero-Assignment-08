import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Search } from "lucide-react";
import SingleApp from "./SingleApp";

const AppsPage = () => {
  const apps = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#F1F5E8] py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          <h1 className="mb-2">Our All Applications</h1>
          <p className="text-gray-500">
            Explore All Apps on the Market developed by us. We code for
            Millions.
          </p>
        </div>

        {/* {} Apps, Search */}
        <div className="flex justify-between py-5">
          <div>
            <h4 className="font-semibold">
              ({filteredApps.length}) Apps Found
            </h4>
          </div>
          {/* Search Bar */}
          <div className="input flex items-center">
            <Search />
            <input
              type="text"
              placeholder="Search Apps"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Apps Grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredApps.map((app) => (
              <SingleApp app={app} key={app.id}></SingleApp>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-gray-500">
              <i className="fa-solid fa-triangle-exclamation"></i> No App Found
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppsPage;
