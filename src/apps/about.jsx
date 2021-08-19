import React from "react";
import Footer from "./footer";
import Header from "./header";

const About = (props) => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="about-section">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="about-us-heading">About CDPC</h2>

              <p>
                The Climate Data Processing Centre (CDPC) was established,
                within Pakistan Meteorological Department (PMD) in September,
                1988. CDPC is located at Meteorological Complex, Karachi. This
                center has been established for storage, processing, retrieval,
                printing and supply of climatological & meteorological data to
                numerous end users. The centre is being operated by trained
                meteorological personnel to meet the need of local & foreign end
                users.
              </p>

              <p>
                CDPC mission is to preserve climate data and make them available
                to the public, government, industry and researchers. The
                centre’s climate data and its products are being used to
                minimize the risks caused by climate variability and weather
                extremes. CDPC data and its products have been used in a variety
                of applications including water resource management, energy,
                engineering, agriculture, forestry, construction, education,
                health, insurance, transport, livestock management and tourism.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
