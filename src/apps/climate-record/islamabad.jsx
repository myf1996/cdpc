import React from "react";
import Footer from "../footer";
import Header from "../header";


const ClimateIslamabad = (props) => {
  
  return (
    <>
    <div className="container">
      <Header/>
      <div className="climate-record-section">
        
        <div className="row">
            <div className="col-sm-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colspan="4">Islamabad &nbsp; &nbsp;<span> (During 1954-2018) </span></th>
                        </tr>
                        <tr>
                            <th rowspan="2">Month</th>
                            <th colspan="2">Temperature &nbsp; &nbsp;<span>(°C)</span></th>
                            <th rowspan="2">Monthly Heaviest Rainfall in mm <br/><span>(yyyy)</span></th>
                        </tr>
                        <tr>
                            <th>Highest Maximum <br/> <span>(dd/yyyy) </span></th>
                            <th>Lowest Minimum <br/><span>(dd/yyyy)</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>January</td>
                            <td>30.1 <span>(30/1995)</span> </td>
                            <td>-3.9 <span>(17/1967)</span></td>
                            <td>166.9 <span>(1954)</span></td>
                        </tr>

                        <tr>
                            <td>February</td>
                            <td>30.5 <span>(24/2016)</span></td>
                            <td>-2.0 <span>(08/1978)</span></td>
                            <td>306.0 <span>(2013)</span></td>
                        </tr>

                        <tr>
                            <td>March</td>
                            <td>36.0 <span>(31/2018)</span></td>
                            <td>-0.3 <span>(17/1967)</span></td>
                            <td>332.0 <span>(2015)</span></td>
                        </tr>

                        <tr>
                            <td>April</td>
                            <td>40.6 <span>(29/2006)</span></td>
                            <td>5.1 <span>(07/1994)</span></td>
                            <td>264.9 <span>(1983)</span></td>
                        </tr>

                        <tr>
                            <td>May</td>
                            <td>45.6 <span>(31/1988)</span></td>
                            <td>10.5 <span>(09/1997)</span></td>
                            <td>115.3 <span>(1965)</span></td>
                        </tr>

                        <tr>
                            <td>June</td>
                            <td>46.6 <span>(23/2005)</span></td>
                            <td>15.0 <span>(02/1979)</span></td>
                            <td>255.0<span>(2008)</span></td>
                        </tr>

                        <tr>
                            <td>July</td>
                            <td>45.0 <span>(03/2012)</span></td>
                            <td>17.8 <span>(05/1966)</span></td>
                            <td>743.3 <span>(1995)</span></td>
                        </tr>

                        <tr>
                            <td>August</td>
                            <td>42.0 <span>(11/1987)</span></td>
                            <td>17.0 <span>(03/1976)</span></td>
                            <td>641.4 <span>(1982)</span></td>
                        </tr>

                        <tr>
                            <td>September</td>
                            <td>38.1 <span>(05/1982)</span></td>
                            <td>13.3 <span>(26/1994)</span></td>
                            <td>421.0  <span>(2014)</span></td>
                        </tr>

                        <tr>
                            <td>October</td>
                            <td>37.5 <span>(01/2009)</span></td>
                            <td>5.7 <span>(31/1984)</span></td>
                            <td>95.8 <span>(1997)</span></td>
                        </tr>

                        <tr>
                            <td>November</td>
                            <td>32.2 <span>(02/1999)</span></td>
                            <td>-0.6 <span>(28/1970)</span></td>
                            <td>91.2 <span>(1959)</span></td>
                        </tr>

                        <tr>
                            <td>December</td>
                            <td>28.3 <span>(07/1998)</span> </td>
                            <td>-2.8 <span>(25/1984)</span> </td>
                            <td>177.9 <span>(1990)</span></td>
                        </tr>

                        <tr>
                            <td>Annual</td>
                            <td>46.6 <span>(23/06/2005)</span></td>
                            <td>-3.9 <span>(17/01/1967)</span></td>
                            <td>1900.0 <span>(2013)</span> </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
      </div>
     <Footer/>
     </div>
    </>
  );
};

export default ClimateIslamabad;