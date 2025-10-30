import React from "react";
import error404 from "../assets/error-404.png";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ErrorPage = () => {
  const navigate = useNavigate();

    return (
      <>
        <Header></Header>
        <div className="flex flex-col items-center justify-center text-center p-5">
          <img
            src={error404}
            alt="error 404"
            className="mx-auto w-80 md:w-96"
          />
          <h1 className="text-3xl font-bold mt-5">Oops, page not found!</h1>
          <p className="text-gray-500 mt-2">
            The page you are looking for is not available.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="btn bg-violet-500 text-white my-5 hover:bg-violet-600"
          >
            Go Back
          </button>
            </div>
            <Footer></Footer>
      </>
    );
};

export default ErrorPage;
