// ✅ AppDetailsPage.jsx
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Star, Download, MessageCircle } from "lucide-react";

const AppDetailsPage = () => {
  const app = useLoaderData();
  const navigate = useNavigate();

  // for invalid app ID
  if (!app) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl mb-4 text-red-500">App not found!</h2>
        <button
          onClick={() => navigate(-1)}
          className="btn bg-violet-500 text-white"
        >
          Go Back
        </button>
      </div>
    );
  }

  // number formatter M/K
  const formatNumber = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div className="bg-[#F1F5E8] py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-md shadow p-5 md:p-10 flex flex-col md:flex-row gap-8 items-center">
          <img
            src={app.image}
            alt={app.title}
            className="w-48 h-48 object-cover rounded-md"
          />

          <div className="flex-1 text-center md:text-left">
            <h1>{app.title}</h1>
            <p className="text-gray-500 mb-3">
              Developed by{" "}
              <span className="text-violet-500">{app.companyName}</span>
            </p>

            <hr className="border-gray-300" />

            <div className="flex justify-around text-center">
              {/* Downloads */}
              <div>
                <Download className="w-5 h-5 text-green-500 mx-auto" />
                <p>Downloads</p>
                <h2 className="font-bold">{formatNumber(app.downloads)}</h2>
              </div>

              {/* Rating */}
              <div>
                <Star className="w-5 h-5 text-orange-500 mx-auto" />
                <p>Rating</p>
                <h2 className="font-bold">{app.ratingAvg}</h2>
              </div>
            </div>

            {/* Reviews */}
            <div>
              <MessageCircle className="w-5 h-5 text-blue-500 mx-auto" />
              <p>Reviews</p>
              <h2 className="font-bold">{formatNumber(app.reviews)}</h2>
            </div>

            {/* Description */}
            <p className="mt-6 mb-4">{app.description}</p>

            <button className="btn text-white bg-gradient-to-r from-violet-600 to-purple-500">
              Install Now ({app.size})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;
