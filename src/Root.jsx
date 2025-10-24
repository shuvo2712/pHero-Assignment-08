import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router";
import HomePage from "./Components/HomePage";

const Root = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
      })
      .catch((err) => console.error("Error fetching apps:", err));
  }, []);

  return (
    <div>
      <Header></Header>
      <HomePage
        apps={apps}
      ></HomePage>
      <Footer></Footer>
    </div>
  );
};

export default Root;
