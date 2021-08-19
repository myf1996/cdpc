import React from "react";
import Footer from "../footer";
import Header from "../header";


const ClimateKarachi = (props) => {
  
  return (
    <>
    <div className="container">
      <Header/>
      <div className="climate-record-section">
        
        <div className="row">
            <div className="col-md-8 col-sm-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colspan="4">Karachi &nbsp; &nbsp;<span> (During 1931-2018) </span></th>
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
                            <td>32.8<span>(16/1965)</span> </td>
                            <td>0.0<span>(21/1934)</span></td>
                            <td>89.3<span>(1995)</span></td>
                        </tr>

                        <tr>
                            <td>February</td>
                            <td>36.5<span>(28/2016)</span></td>
                            <td>3.3<span>(11/1950)</span></td>
                            <td>96.0<span>(1979)</span></td>
                        </tr>

                        <tr>
                            <td>March</td>
                            <td>42.2<span>(20/2010)</span></td>
                            <td>7.0<span>(09/1979)</span></td>
                            <td>130.0<span>(1967)</span></td>
                        </tr>

                        <tr>
                            <td>April</td>
                            <td>44.4<span>(16/1947)</span></td>
                            <td>12.2<span>(29/1967)</span></td>
                            <td>52.8<span>(1935)</span></td>
                        </tr>

                        <tr>
                            <td>May</td>
                            <td>47.8<span>(09/1938)</span></td>
                            <td>17.7<span>(04/1989)</span></td>
                            <td>33.3<span>(1933)</span></td>
                        </tr>

                        <tr>
                            <td>June</td>
                            <td>47.0<span>(18/1979)</span></td>
                            <td>22.1<span>(03/1997)</span></td>
                            <td>110.2<span>(2007)</span></td>
                        </tr>


                        <tr>
                            <td>July</td>
                            <td>42.2<span>(03/1958)</span></td>
                            <td>22.2<span>(22/1938)</span></td>
                            <td>429.3<span>(1967)</span></td>
                        </tr>

                        <tr>
                            <td>August</td>
                            <td>41.7<span>(09/1964)</span></td>
                            <td>20.0<span>(07/1984)</span></td>
                            <td>262.5<span>(1979)</span></td>
                        </tr>

                        <tr>
                            <td>September</td>
                            <td>42.8<span>(30/1951)</span></td>
                            <td>18.0<span>(23/1994)</span></td>
                            <td>315.7<span>(1959)</span></td>
                        </tr>

                        <tr>
                            <td>October</td>
                            <td>43.3<span>(01/1951)</span></td>
                            <td>10.0<span>(30/1949)</span></td>
                            <td>98.0<span>(1956)</span></td>
                        </tr>

                        <tr>
                            <td>November</td>
                            <td>38.5<span>(02/1994)</span></td>
                            <td>6.1<span>(29/1938)</span></td>
                            <td>83.1<span>(1959)</span></td>
                        </tr>

                        <tr>
                            <td>December</td>
                            <td>35.5<span>(03/2011)</span> </td>
                            <td>1.3<span>(14/1986)</span> </td>
                            <td>63.6<span>(1980)</span></td>
                        </tr>

                        <tr>
                            <td>Annual</td>
                            <td>47.8<span>(09/05/1938)</span></td>
                            <td>0.0<span>(21/01/1934)</span></td>
                            <td>713.0<span>(1967)</span></td>
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

export default ClimateKarachi;