import React from "react";
import Footer from "./footer";
import LeftSiderbar from "./left_sidebar";
import Header from "./header";
import RightSiderbar from "./right_sidebar";
import main from '../assets/images/main.jpg';

const Main = (props) => {
  
  return (
    <>
    <div className="container">
      <Header/>
      <div className="main-section">
        <div className="row">
          <div className="col-md-12">
            <a href="https://public.wmo.int/en/media/press-release/wmo-verifies-3rd-and-4th-hottest-temperature-recorded-earth" style={{textDecoration:"none"}}>
              <h6 className="main-center-heading">
                WMO verifies Turbat maximum temperature as 4<sup>th</sup> hottest temperature recorded on earth
              </h6>
            </a>
          </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-12">
                <LeftSiderbar/>
            </div>
            <div className="col-md-6 col-sm-12">
                <img className="main-img" src={main} alt="image" />
            </div>
            <div className="col-md-3 col-sm-12">
                <RightSiderbar/>
            </div>
        </div>
      </div>
     <Footer/>
     </div>
    </>
  );
};

export default Main;