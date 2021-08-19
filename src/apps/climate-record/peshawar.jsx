import React from "react";
import Footer from "../footer";
import Header from "../header";


const ClimatePeshawar = (props) => {
  
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
                            <th colspan="4">Peshawar &nbsp; &nbsp;<span> (During 1931-2018) </span></th>
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
                            <td>27.0 <span>(30/2007)</span> </td>
                            <td>-3.9 <span>(07/1970)</span></td>
                            <td>150.3 <span>(1999)</span></td>
                        </tr>

                        <tr>
                            <td>February</td>
                            <td>30.5 <span>(24/2016)</span></td>
                            <td>-1.0 <span>(08/1978)</span></td>
                            <td>236.0 <span>(2007)</span></td>
                        </tr>

                        <tr>
                            <td>March</td>
                            <td>36.0 <span>(19/1974)</span></td>
                            <td>1.7<span> (**/1945)**</span></td>
                            <td>222.6 <span>(1978)</span></td>
                        </tr>

                        <tr>
                            <td>April</td>
                            <td>42.2 <span>(29/1941)</span></td>
                            <td>6.7 <span>(02/1968)</span></td>
                            <td>267.0 <span>(2008)</span></td>
                        </tr>

                        <tr>
                            <td>May</td>
                            <td>47.2 <span>(31/1984)</span></td>
                            <td>11.7 <span>(07/1960)</span></td>
                            <td>119.6 <span>(1965)</span></td>
                        </tr>

                        <tr>
                            <td>June</td>
                            <td>50.0 <span>(18/1995)</span></td>
                            <td>13.3 <span>(08/1949)</span></td>
                            <td>81.0 <span>(2010)</span></td>
                        </tr>


                        <tr>
                            <td>July</td>
                            <td>46.6 <span>(07/1992)</span></td>
                            <td>18.0 <span>(12/1992)</span></td>
                            <td>409.0 <span>(2010)</span></td>
                        </tr>

                        <tr>
                            <td>August</td>
                            <td>46.0 <span>(12/1987)</span></td>
                            <td>19.4 <span>(27/1954)</span></td>
                            <td>280.2 <span>(1976)</span></td>
                        </tr>

                        <tr>
                            <td>September</td>
                            <td>42.0 <span>(25/1976)</span></td>
                            <td>12.0 <span>(30/1991)</span></td>
                            <td>127.0 <span>(2012)</span></td>
                        </tr>

                        <tr>
                            <td>October</td>
                            <td>38.5 <span>(05/2006)</span></td>
                            <td>8.3 <span>(29/1949)</span></td>
                            <td>203.0 <span>(1996)</span></td>
                        </tr>

                        <tr>
                            <td>November</td>
                            <td>35.0 <span>(03/1979)</span></td>
                            <td>1.1 <span>(24/1949)</span></td>
                            <td>111.5 <span>(1959)</span></td>
                        </tr>

                        <tr>
                            <td>December</td>
                            <td>29.0 <span>(09/1979)*</span> </td>
                            <td>-1.3 <span>(25/1984)</span> </td>
                            <td>254.3 <span>(1945)</span></td>
                        </tr>

                        <tr>
                            <td>Annual</td>
                            <td>50.0 <span>(18/06/1995)</span></td>
                            <td>-3.9 <span>(07/01/1970)</span></td>
                            <td>904.5 <span>(2003)</span></td>
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

export default ClimatePeshawar;