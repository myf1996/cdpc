import React from "react";
import Footer from "./footer";
import Header from "./header";


const Guillines = (props) => {
  
  return (
    <>
    <div className="container">
      <Header/>
      <div className="guidline-section">
        
        <div className="row">
            <div className="col-sm-12">
                <h2 className="about-us-heading">Guide Lines For End Users</h2>
                
                <p>The following charges for the supply of climatological data, reports and publications apply from <span>1 October, 2018</span> until further notice. Climate data and products can be obtained by supplying following information on company/organization letter head and by contacting us.</p>
                <ul>
                    <li>Purpose of data</li>
                    <li>Period of data</li>
                    <li>Parameters (meteorological)</li>
                    <li>Place(s) for which data is required</li>
                </ul>
                
                <p>Overall minimum charge of Rs. 2,000 applies to all enquiries. End users requesting data for claim purposes are charged Rs. 20,000 extra. Data is supplied on the understanding that it is for a single end user and cannot be passed to a Third Party nor can it be used to generate a Meteorological Value Added Service. If data requested is used to form a component of a saleable product, or required for onward dissemination, then formal negotiations with PMD are necessary.</p>
                
                <p>All payments must be made in advance & on prescribed filled-in chalan in the State Bank of Pakistan under the head:</p>
                <ul>
                    <li>Pakistan Meteorological Department <br/>C027-Community Services <br/> C02705-Collection of Payments for Services Rendered (Data Sale)</li>
                </ul>

                <p>The prescribed partially filled-in chalan either can be downloaded from PMD/CDPC web link <span>http://www.pmd.gov.pk/cdpc/chalan-form.pdf</span> or obtained from Climate Data Processing Centre (CDPC) office during working hours. Generally data can be obtained within 1-3 working days after <span>receipt of original paid  chalan</span>.</p>

                <h2  className="about-us-heading">Supply Of Data For Academic Reserach Purpose</h2>

                <p>In order to promote and encourage research, climatological data and/or products supplied to an end-user for non-commercial scientific or educational projects are charged for on the basis of marginal costs (only 10-50% of original cost) or free of charges in some cases for <span>LIMITED VOLUME</span> of data.</p>

                <p>Research is considered as non-commercial if the results are openly available, without any commercial purposes, and the research is subsequently submitted for open publication. An enquirer wishing to avail of this provision is required to specify in writing that:</p>
                <ul>
                    <li>The request should be signed by Chairman/Director/Head of Research Institution and research supervisor on original Letter of Institution.</li>
                    <li>A copy of project / research synopsis provided</li>
                    <li>Requests for data from researchers or for educational purposes must accept that the data cannot be passed to a Third Party nor used to generate a       Meteorological Value Added Service. The supplied data should only be used for the specific purpose mentioned in request.</li>
                    <li>The researcher should submit at least one each (printed as well as electronic) final copy of their research to this office</li>
                </ul>
                <h2  className="about-us-heading">Cost Of Climate Data & Products</h2>
                <div className="col-md-8 col-sm-12 ">
               
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th rowspan="2">SN</th>
                            <th rowspan="2">Type of Data</th>
                            <th colspan="2">Charges</th>
                        </tr>
                        <tr>
                            <th>@</th>
                            <th>RS</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="text-center">1</td>
                            <td>Hourly Surface data (24 observations per day)</td>
                            <td>per station per year per meteorological parameter</td>
                            <td className="text-center">24,000</td>
                        </tr>

                        <tr>
                            <td className="text-center">2</td>
                            <td>Three Hourly Surface data (8 observations per day)</td>
                            <td>per station per year per meteorological parameter</td>
                            <td className="text-center">15,000</td>
                        </tr>

                        <tr>
                            <td className="text-center">3</td>
                            <td>Three mandatory Hourly Surface data '3 observations per day ( 05, 08 & 17 PST)'</td>
                            <td>per station per year per meteorological parameter</td>
                            <td className="text-center">8,000</td>
                        </tr>

                        <tr>
                            <td className="text-center">4</td>
                            <td>Daily Surface data (one observation per day)</td>
                            <td>per station per year per meteorological parameter</td>
                            <td className="text-center">3,000</td>
                        </tr>

                        <tr>
                            <td className="text-center">5</td>
                            <td>Daily Upper Air data (Radio Sonde)</td>
                            <td>per station per month per 5 meteorological parameters</td>
                            <td className="text-center">10,000</td>
                        </tr>

                        <tr>
                            <td className="text-center">6</td>
                            <td>Monthly/Annual Average Data</td>
                            <td>per station per year per meteorological parameter</td>
                            <td className="text-center">300</td>
                        </tr>

                        <tr>
                            <td className="text-center">7</td>
                            <td>10-Years Average/Extreme	</td>
                            <td>per station per decade per meteorological parameter</td>
                            <td className="text-center">1,000</td>
                        </tr>

                        <tr>
                            <td className="text-center">8</td>
                            <td>Normal on monthly basis (30 years averages)	</td>
                            <td>pper station per  meteorological parameter</td>
                            <td className="text-center">1,500</td>
                        </tr>

                        <tr>
                            <td className="text-center">9</td>
                            <td>Normal on daily basis 30 years (1981-2010)	</td>
                            <td>per station per  meteorological parameter</td>
                            <td className="text-center">6,000</td>
                        </tr>

                        <tr>
                            <td className="text-center">10</td>
                            <td>Climatic Normals </td>
                            <td>per station</td>
                            <td className="text-center">3,000</td>
                        </tr>

                        <tr>
                            <td className="text-center">11</td>
                            <td>Wind rose/frequency table </td>
                            <td>per wind rose in addition to cost of the data involved</td>
                            <td className="text-center">15,000</td>
                        </tr>

                        <tr>
                            <td className="text-center">12</td>
                            <td>Moon rise & set / new moon coordinates </td>
                            <td>per station per year.</td>
                            <td className="text-center">2,000</td>
                        </tr>

                        <tr>
                            <td className="text-center">13</td>
                            <td>Sun Set & Rise</td>
                            <td>per station per year.</td>
                            <td className="text-center">2,000</td>
                        </tr>

                        
                        <tr>
                            <td className="text-center">14</td>
                            <td>Solar & Lunar eclipse</td>
                            <td>per year.</td>
                            <td className="text-center">10,000</td>
                        </tr>

                        <tr>
                            <td className="text-center">15</td>
                            <td>One year ahead Solar & Lunar Eclipse</td>
                            <td>per set.</td>
                            <td className="text-center">10,000</td>
                        </tr>

                        <tr>
                            <td className="text-center">16</td>
                            <td>History of Tropical Cyclones/Storms of Pakistan</td>
                            <td>per set.</td>
                            <td className="text-center">10,000</td>
                        </tr>

                        <tr>
                            <td className="text-center">17</td>
                            <td>Investigation Report on Wind Power Potential</td>
                            <td>per report for each station.</td>
                            <td className="text-center">15,000</td>
                        </tr>

                        <tr>
                            <td className="text-center">18</td>
                            <td>Wind mapping raw data</td>
                            <td>per station per year.</td>
                            <td className="text-center">150,000</td>
                        </tr>

                        <tr>
                            <td className="text-center">19</td>
                            <td>Earthquake data</td>
                            <td>1° X 1° (Lat/Long) Grid box per Year.</td>
                            <td className="text-center">2,000</td>
                        </tr>


                    </tbody>
                    
                    
                </table>
            
                </div>
                
            </div>
        </div>
      </div>
     <Footer/>
     </div>
    </>
  );
};

export default Guillines;
// #ececf5