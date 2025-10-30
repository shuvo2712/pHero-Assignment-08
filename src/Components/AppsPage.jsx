import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Search } from "lucide-react";
import SingleApp from "./SingleApp";

const AppsPage = () => {
  const apps = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState(apps);
  const [loading, setLoading] = useState(false);

  // Handle search + loading
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = apps.filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApps(filtered);
      setLoading(false);
    }, 200); // delay 400ms for smoother UX

    return () => clearTimeout(timer);
  }, [searchTerm, apps]);

  return (
    <div className="bg-[#F1F5E8] p-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-2">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      {/* Apps count + Search */}
      <div className="flex justify-between items-center py-5">
        <div>
          <h4>({filteredApps.length}) Apps Found</h4>
        </div>

        {/* Search Bar */}
        <div className="input flex items-center border rounded-md px-2 bg-white shadow-sm">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search Apps"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-2 outline-none bg-transparent w-full"
          />
        </div>
      </div>

      {/* Apps or Loading */}
      {loading ? (
        <div className="flex flex-col justify-center items-center py-20">
          <span className="loading loading-spinner loading-lg text-violet-600"></span>
          <p className="mt-3 text-gray-500 font-medium">Searching apps...</p>
        </div>
      ) : filteredApps.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5">
          {filteredApps.map((app) => (
            <SingleApp app={app} key={app.id} />
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
  );
};

export default AppsPage;
