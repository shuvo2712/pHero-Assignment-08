import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Star, Download, MessageCircle, Check } from "lucide-react";
import notFoundImg from "../assets/App-Error.png";
import { useContext } from "react";
import { InstallContext } from "../Context/InstallContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ToastContainer, toast } from "react-toastify";

const AppDetailsPage = () => {
  const app = useLoaderData();
  const navigate = useNavigate();
  const { installApp, installedApps } = useContext(InstallContext);

  // check if already installed
  const isAlreadyInstalled = installedApps.some((a) => a.id === app.id);
  const [isInstalled, setIsInstalled] = useState(isAlreadyInstalled);

  // handle install app
  const handleInstall = () => {
    installApp(app);
    setIsInstalled(true);
    toast(`${app.title} has been installed successfully!`);
  };

  // app not found
  if (!app) {
    return (
      <div className="p-10 text-center">
        <img src={notFoundImg} alt="" className="mx-auto" />
        <h2 className="my-4 text-red-500">OOPS! App not found!</h2>
        <p>
          The App you are requesting is not found in our system. Please try
          another apps.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="btn bg-violet-500 text-white mt-4"
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
            className="w-52 object-cover rounded-md"
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
          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`px-6 py-2 rounded text-white transition ${
              isInstalled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isInstalled ? "Installed" : "Install Now"}
          </button>
          <ToastContainer />
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
