import React from "react";
import Footer from "../footer";
import Header from "../header";


const ClimateQuetta = (props) => {
  
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
                            <th colspan="4">Quetta &nbsp; &nbsp;<span> (During 1946-2018) </span></th>
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
                            <td>23.6 <span>(28/1987)</span> </td>
                            <td>-18.3 <span>(08/1970)</span></td>
                            <td>178.0 <span>(1982)</span></td>
                        </tr>

                        <tr>
                            <td>February</td>
                            <td>26.7 <span>(26/1953)</span></td>
                            <td>-16.7 <span>(01/1970)</span></td>
                            <td>189.2 <span>(1982)</span></td>
                        </tr>

                        <tr>
                            <td>March</td>
                            <td>31.1 <span>(19/2010)</span></td>
                            <td>-8.3 <span>(12/1973)</span></td>
                            <td>232.4 <span>(1982)</span></td>
                        </tr>

                        <tr>
                            <td>April</td>
                            <td>35.5 <span>(26/2015)</span></td>
                            <td>-3.9 <span>(02/1965)</span></td>
                            <td>158.7 <span>(1992)</span></td>
                        </tr>

                        <tr>
                            <td>May</td>
                            <td>39.4 <span>(11/2000)</span></td>
                            <td>-0.3 <span>(03/1989)</span></td>
                            <td>39.9 <span>(1963)</span></td>
                        </tr>

                        <tr>
                            <td>June</td>
                            <td>41.5 <span>(**/2005)</span></td>
                            <td>5.0 <span>(01/1958)</span></td>
                            <td>61.0 <span>(2007)</span></td>
                        </tr>


                        <tr>
                            <td>July</td>
                            <td>42.0 <span>(10/1998)</span></td>
                            <td>8.9 <span>(07/1955)</span></td>
                            <td>163.6 <span>(1956)</span></td>
                        </tr>

                        <tr>
                            <td>August</td>
                            <td>40.6 <span>(09/1970)</span></td>
                            <td>3.3 <span>(23/1949)</span></td>
                            <td>173.0 <span>(1983)</span></td>
                        </tr>

                        <tr>
                            <td>September</td>
                            <td>38.3 <span>(01/1970)</span></td>
                            <td>-0.6 <span>(30/1962)</span></td>
                            <td>62.0 <span>(1994)</span></td>
                        </tr>

                        <tr>
                            <td>October</td>
                            <td>34.0 <span>(01/1998)</span></td>
                            <td>-8.3 <span>(29/1949)</span></td>
                            <td>68.8 <span>(1982)</span></td>
                        </tr>

                        <tr>
                            <td>November</td>
                            <td>36.0 <span>(03/1998)</span></td>
                            <td>-13.3 <span>(30/1962)</span></td>
                            <td>72.0 <span>(2006)</span></td>
                        </tr>

                        <tr>
                            <td>December</td>
                            <td>25.5 <span>(05/2015)</span> </td>
                            <td>-18.3 <span>(21/1950)</span> </td>
                            <td>162.0 <span>(1982)</span></td>
                        </tr>

                        <tr>
                            <td>Annual</td>
                            <td>42.0 <span>(10/07/1998)</span></td>
                            <td>-18.3 <span>(08/01/1970)</span></td>
                            <td>949.8 <span>(1982)</span></td>
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

export default ClimateQuetta;