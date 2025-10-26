import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Apps from "./Apps";

const HomePage = () => {
  const apps = useLoaderData();
  console.log(apps);
  return (
    <div>
      <Banner></Banner>
      <Apps apps={apps}></Apps>
    </div>
  );
};

export default HomePage;
