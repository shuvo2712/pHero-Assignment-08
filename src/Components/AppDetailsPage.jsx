import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Star, Download, MessageCircle } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const AppDetailsPage = () => {
  const app = useLoaderData();
  const navigate = useNavigate();

  // app not found
  if (!app) {
    return (
      <div className="p-10 text-center">
        <h2 className="mb-4 text-red-500">App not found!</h2>
        <button
          onClick={() => navigate(-1)}
          className="btn bg-violet-500 text-white"
        >
          Go Back
        </button>
      </div>
    );
  }

  // number formatter (K / M)
  const formatNumber = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div className="bg-[#F1F5E8] p-10">
      {/* image and stats */}
      <section className="flex gap-5 items-center">
        <div>
          <img
            src={app.image}
            alt={app.title}
            className="w-50 object-cover rounded-md"
          />
        </div>

        <div>
          <h4>{app.title}</h4>
          <p>
            Developed by{" "}
            <span className="text-violet-500">{app.companyName}</span>
          </p>
          <hr className="border-gray-300 my-2" />

          {/* stats */}
          <section className="flex gap-10 text-center">
            <div>
              <Download className="w-5 h-5 text-green-500 mx-auto" />
              <p>Downloads</p>
              <h4>{formatNumber(app.downloads)}</h4>
            </div>

            <div>
              <Star className="w-5 h-5 text-orange-500 mx-auto" />
              <p>Rating</p>
              <h4>{app.ratingAvg}</h4>
            </div>

            <div>
              <MessageCircle className="w-5 h-5 text-blue-500 mx-auto" />
              <p>Reviews</p>
              <h4>{formatNumber(app.reviews)}</h4>
            </div>
          </section>

          {/* button */}
          <button className="btn bg-green-500 text-white hover:bg-gradient-to-r from-violet-600 to-purple-500 mt-3">
            Install Now ({app.size})
          </button>
        </div>
      </section>

      <hr className="my-5 border-gray-300" />

      {/* Recharts */}
      <div>
        <h6>Ratings</h6>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={app.ratings}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" reversed />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8811" barSize={25} radius={5} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <hr className="my-5 border-gray-300" />

      {/* description */}
      <h6>Description</h6>
      <p className="py-2">{app.description}</p>
    </div>
  );
};

export default AppDetailsPage;
