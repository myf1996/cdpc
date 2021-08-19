import React from "react";
import Footer from "./footer";
import Header from "./header";
import Jul_2021_Rainfall_Dep from '../assets/images/Jul-2021-Rainfall-Dep.png';
import Jul_2021_Rainfall from '../assets/images/Jul-2021-Rainfall.png';
import Jul2021Graph from '../assets/images/Jul2021Graph.png';
import MS2021_CUM from '../assets/images/MS2021-cum.png';
import monsoon_rainfall_2021_update from '../assets/reports/monsoon_rainfall_2021_update.pdf';

const MonsoonRainfall = (props) => {

  return (
    <>
    <div className="container">
      <Header/>
      <div className="monsoon-rainfall-section">
        
        <div className="row">
            <div className="col-sm-12">
                <h2 className="monsoon-rainfall-heading2">Pakistan Monsoon 2021 Rainfall Update</h2>
                <h4 className="monsoon-rainfall-heading4">Highlights</h4>
                <div className="container">
                    <div className="row">
                    <div className="col-md-8">
                        <div className="monsoon-rainfall-left">
                        <h5 className="monsoon-rainfall-heading5">16<sup>th</sup> August, 2021</h5>
                <ul>
                    <li>Pakistan rainfall, for the country as whole, for the period 1-July to 16-August 2021 was <span>15%</span> below average.</li>

                    <li>During this period, on regional scale <span>AJK (-21%)</span> & <span>Sindh (-61%)</span> regions experienced below normal rainfall whereas <span>Punjab (+17%)</span> & <span>GB (+48%)</span> got above average rainfall and province of <span>Balochistan (-1 %)</span> & <span>KPK (+9%)</span> recorded close to normal rainfall.</li>

                    <li>During first half of August 2021, national rainfall was <span>49%</span> below average. All regions/provinces recorded below average rainfall during this period.</li>
                </ul>
                <h5 className="monsoon-rainfall-heading5">July, 2021</h5>
                <ul>
                    <li>Pakistan rainfall, for the country as whole, for the month of July 2021 was <span>4%</span> above average.</li>

                    <li>During the first month of monsoon season 2021, <span>Balochistan (+22%)</span>, <span>GB (+86%)</span>, & <span>KPK (+28%)</span> recorded above average rainfall, whereas <span>AJK (-4%)</span> & <span>Punjab (+1%)</span> experienced close to normal and <span>Sindh (-47%)</span> below normal rainfall.</li>

                    <li>Stations highest accumulated rainfall recorded for the month July 2021 were; Sialkot-Cantt/AP (544.9 mm/514.3 mm), Islamabad Golra/Saidpur (450.0 mm/428.0 mm), Malam Jabba (434.0 mm), Narowal (380.0 mm) & Kakul (374.4 mm).</li>
                </ul>
                        </div>
                    
                    </div>
                    <div className="col-md-4">
                        <div className="monsoon-rainfall-right">
                        <div className="right-head">
								<div className="single-info">
									<h4 className="title">Contact Person Name</h4>
									<ul>
										<li>Nadeem Faisal</li>
									</ul>
								</div>

                                <div className="single-info">
									<h4 className="title">Email</h4>
									<ul>
										<li>nadeem.faisal@pmd.gov.pk</li>
									</ul>
								</div>

                                <div className="single-info">
									<h4 className="title">Download PDF</h4>
									<ul>
										<li><a href={monsoon_rainfall_2021_update} style={{color:"#000",fontWeight:600}}>HERE</a></li>
									</ul>
								</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
            
            <div class="container">
                <div class="row">
                    <a href={Jul_2021_Rainfall_Dep} data-toggle="lightbox"  data-gallery="gallery" class="col-md-6">
                        <div className="lightbox-reset">
                            <img src={Jul_2021_Rainfall_Dep} class="img-fluid rounded lightbox-reset" alt="Jul_2021_Rainfall_Dep"/>
                        </div>
                    </a>

                    <a href={Jul_2021_Rainfall} data-toggle="lightbox" data-gallery="gallery" class="col-md-6">
                    <div className="lightbox-reset">
                            <img src={Jul_2021_Rainfall} alt="Jul_2021_Rainfall" class="img-fluid rounded"/>
                        </div>
                        
                    </a>

                </div>
            </div>
            <div className="spaceing"></div>
            <div class="container">
                <div class="row">

                    <a href={Jul2021Graph} data-toggle="lightbox" data-gallery="gallery" class="col-md-6">
                    <div className="lightbox-reset">
                            <img src={Jul2021Graph} alt="Jul2021Graph" class="img-fluid rounded"/>
                        </div>
                    </a>

                    <a href={MS2021_CUM} data-toggle="lightbox" data-gallery="gallery" class="col-md-6">
                    <div className="lightbox-reset">
                        <img src={MS2021_CUM} alt="MS2021_CUM" class="img-fluid rounded"/>
                        </div>
                        
                    </a>
                </div>
            </div>
        
        </div>
      </div>
     <Footer/>
     </div>
    </>
  );
};

export default MonsoonRainfall;