import React from 'react';
import bannerImg from "../assets/hero.png";

const Banner = () => {
    return (
        <div className="flex flex-col items-center justify-center">
              {/* banner */}
              <div className="mt-10 text-center ">
                <h1 className="font-bold m-5">
                  We Build <span className="text-violet-500">Productive</span> Apps
                </h1>
                <div className="text-gray-500 mb-5">
                  <p>
                    At HERO.IO, we craft innovative apps designed to make everyday life
                    simpler, smarter and more exciting.
                  </p>
                  <p>
                    Our goal is to turn your ideas into digital experience that truly
                    make an impact.
                  </p>
                </div>
              </div>
        
              {/* g-play, app store Btn */}
              <div>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-primary mr-5"
                >
                  <i className="fa-brands fa-google-play"></i> Google Play
                </a>
        
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-primary"
                >
                  <i className="fa-brands fa-app-store-ios"></i> App Store
                </a>
              </div>
        
              {/* banner image */}
              <div className="mt-5">
                <img src={bannerImg} alt="" />
              </div>
        
              {/* trusted by */}
              <div className="bg-violet-500 w-full text-center text-white">
                <h3 className="font-semibold mt-10 mb-5">
                  Trusted By Millions, Built For You
                </h3>
                <div className="flex justify-around mb-10">
                  {/* downloads */}
                  <div>
                    <p>Total Downloads</p>
                    <h1>29.6M</h1>
                    <p>21% more than last month</p>
                  </div>
                  <div>
                    <p>Total Reviews</p>
                    <h1>906K</h1>
                    <p>46% more than last month</p>
                  </div>
                  <div>
                    <p>Active Apps</p>
                    <h1>132+</h1>
                    <p>31 more will launch</p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;