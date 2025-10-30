import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TrendingApps from "./TrendingApps";

const HomePage = () => {
  const apps = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <TrendingApps apps={apps}></TrendingApps>
    </div>
  );
};

export default HomePage;
