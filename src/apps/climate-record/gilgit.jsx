import React from "react";
import Footer from "../footer";
import Header from "../header";


const ClimateGilgit = (props) => {
  
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
                            <th colspan="4">Gilgit &nbsp; &nbsp;<span> (During 1952-2018) </span></th>
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
                            <td>17.5 <span>(31/2007)</span> </td>
                            <td>-10.0 <span>(07/1972)</span></td>
                            <td>32.2 <span>(2009)</span></td>
                        </tr>

                        <tr>
                            <td>February</td>
                            <td>22.0 <span>(* /1993)</span></td>
                            <td>-8.9 <span>(01/1964)</span></td>
                            <td>35.5 <span>(2011)</span></td>
                        </tr>

                        <tr>
                            <td>March</td>
                            <td>29.4 <span>(22/1971)</span></td>
                            <td>-3.0 <span>(06/2000) </span></td>
                            <td>85.9 <span>(1955)</span></td>
                        </tr>

                        <tr>
                            <td>April</td>
                            <td>37.2 <span>(22/1970)</span></td>
                            <td>1.1 <span>(06/1967)</span></td>
                            <td>127.0 <span>(1979)</span></td>
                        </tr>

                        <tr>
                            <td>May</td>
                            <td>41.5 <span>(16/2006)</span></td>
                            <td>3.9 <span>(10/1966)</span></td>
                            <td>90.9 <span>(1967)</span></td>
                        </tr>

                        <tr>
                            <td>June</td>
                            <td>43.5 <span>(**/1990)</span></td>
                            <td>5.1 <span>(18/1989)</span></td>
                            <td>48.0 <span>(1996)</span></td>
                        </tr>


                        <tr>
                            <td>July</td>
                            <td>46.3 <span>(17/1997)</span></td>
                            <td>10.0 <span>(15/1994)</span></td>
                            <td>78.2 <span>(1959)</span></td>
                        </tr>

                        <tr>
                            <td>August</td>
                            <td>43.8 <span>(01/1983)</span></td>
                            <td>9.8 <span>(28/1997)</span></td>
                            <td>88.1 <span>(1997)</span></td>
                        </tr>

                        <tr>
                            <td>September</td>
                            <td>41.7 <span>(08/1958)</span></td>
                            <td>3.0 <span>(23/2000)</span></td>
                            <td>61.3  <span>(1992)</span></td>
                        </tr>

                        <tr>
                            <td>October</td>
                            <td>36.0 <span>(04/2008)</span></td>
                            <td>-2.5 <span>(29/2000)</span></td>
                            <td>102.4 <span>(1987)</span></td>
                        </tr>

                        <tr>
                            <td>November</td>
                            <td>28.0 <span>(01/2003)</span></td>
                            <td>-8.5 <span>(30/1990)</span></td>
                            <td>27.4 <span>(1993)</span></td>
                        </tr>

                        <tr>
                            <td>December</td>
                            <td>24.5 <span>(02/1988)</span> </td>
                            <td>-11.1 <span>(20/1984)</span> </td>
                            <td>36.5 <span>(2004)</span></td>
                        </tr>

                        <tr>
                            <td>Annual</td>
                            <td>46.3 <span>(17/07/1997)</span></td>
                            <td>-11.1 <span>(20/12/1984)</span></td>
                            <td>267.5 <span>(2010)</span></td>
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

export default ClimateGilgit;