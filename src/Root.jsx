import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet, useNavigation } from "react-router-dom";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      {navigation.state === "loading" ? (
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <span className="loading loading-spinner loading-lg text-violet-600"></span>
          <p className="mt-3 text-gray-500 font-medium">Loading page...</p>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default Root;
