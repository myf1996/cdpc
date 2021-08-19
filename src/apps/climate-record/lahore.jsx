import React from "react";
import Footer from "../footer";
import Header from "../header";


const ClimateLahore = (props) => {
  
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
                            <th colspan="4">Lahore &nbsp; &nbsp;<span> (During 1931-2018) </span></th>
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
                            <td>27.8 <span>(23/1952)</span> </td>
                            <td>-2.2 <span>(17/1935)</span></td>
                            <td>121.2 <span>(1981)</span></td>
                        </tr>

                        <tr>
                            <td>February</td>
                            <td>33.3 <span>(27/1953)</span></td>
                            <td>0.0 <span>(02/1934)</span></td>
                            <td>509.0 <span>(1934)</span></td>
                        </tr>

                        <tr>
                            <td>March</td>
                            <td>37.8 <span>(26/1942)</span></td>
                            <td>2.8 <span>(05/1945)</span></td>
                            <td>254.5 <span>(1934)</span></td>
                        </tr>

                        <tr>
                            <td>April</td>
                            <td>46.1 <span>(29/1941)</span></td>
                            <td>10.0 <span>(01/1940)</span></td>
                            <td>141.0 <span>(1983)</span></td>
                        </tr>

                        <tr>
                            <td>May</td>
                            <td>48.3 <span>(30/1944)</span></td>
                            <td>14.0 <span>(14/1977)</span></td>
                            <td>129.0 <span>(1958)</span></td>
                        </tr>

                        <tr>
                            <td>June</td>
                            <td>47.2 <span>(08/1972)</span></td>
                            <td>18.0 <span>(18/1977)</span></td>
                            <td>208.6 <span>(1996)</span></td>
                        </tr>


                        <tr>
                            <td>July</td>
                            <td>46.1 <span>(03/1948)</span></td>
                            <td>20.0 <span>(04/1974)</span></td>
                            <td>477.9 <span>(1981)</span></td>
                        </tr>

                        <tr>
                            <td>August</td>
                            <td>42.8 (02/1947)<span>(09/1964)</span></td>
                            <td>19.0 (10/1980)<span>(07/1984)</span></td>
                            <td>640.0 <span>(1996)</span></td>
                        </tr>

                        <tr>
                            <td>September</td>
                            <td>41.7 <span>(16/1938)</span></td>
                            <td>16.7 <span>(23/1972)</span></td>
                            <td>523.2 <span>(1954)</span></td>
                        </tr>

                        <tr>
                            <td>October</td>
                            <td>40.6 <span>(07/1951)</span></td>
                            <td>8.3 <span>(31/1949)</span></td>
                            <td>155.0 <span>(1985)</span></td>
                        </tr>

                        <tr>
                            <td>November</td>
                            <td>35.0 <span>(**/1943)*</span></td>
                            <td>1.7 <span>(30/1962)</span></td>
                            <td>77.9 <span>(1997)</span></td>
                        </tr>

                        <tr>
                            <td>December</td>
                            <td>30.0 <span>(07/1998)</span> </td>
                            <td>-1.1 <span>(28/1950)</span> </td>
                            <td>111.8 <span>(1967)</span></td>
                        </tr>

                        <tr>
                            <td>Annual</td>
                            <td>48.3 <span>(30/05/1944)</span></td>
                            <td>-2.2 <span>(17/01/1935)</span></td>
                            <td>1232.5 <span>(1997)</span></td>
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

export default ClimateLahore;