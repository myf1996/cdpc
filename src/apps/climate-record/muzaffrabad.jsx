import React from "react";
import Footer from "../footer";
import Header from "../header";

const ClimateMuzaffarabad = (props) => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="climate-record-section">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th colspan="4">
                      Muzaffarabad &nbsp; &nbsp;
                      <span> (During 1955-2018) </span>
                    </th>
                  </tr>
                  <tr>
                    <th rowspan="2">Month</th>
                    <th colspan="2">
                      Temperature &nbsp; &nbsp;<span>(°C)</span>
                    </th>
                    <th rowspan="2">
                      Monthly Heaviest Rainfall in mm <br />
                      <span>(yyyy)</span>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      Highest Maximum <br /> <span>(dd/yyyy) </span>
                    </th>
                    <th>
                      Lowest Minimum <br />
                      <span>(dd/yyyy)</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>January</td>
                    <td>
                      27.0 <span>(05/1988)</span>{" "}
                    </td>
                    <td>
                      -3.0 <span>(02/2008)</span>
                    </td>
                    <td>
                      273.8 <span>(1992)</span>
                    </td>
                  </tr>

                  <tr>
                    <td>February</td>
                    <td>
                      29.4 <span>(29/2008)</span>
                    </td>
                    <td>
                      -1.1 <span>(01/1964)</span>
                    </td>
                    <td>
                      357.0 <span>(2003)</span>
                    </td>
                  </tr>

                  <tr>
                    <td>March</td>
                    <td>
                      37.0 <span>(25/1977)</span>
                    </td>
                    <td>
                      1.0 <span>(09/1979)</span>
                    </td>
                    <td>
                      534.7 <span>(1993)</span>
                    </td>
                  </tr>

                  <tr>
                    <td>April</td>
                    <td>
                      40.5 <span>(29/1988)</span>
                    </td>
                    <td>
                      6.1 <span>(15/1955)</span>
                    </td>
                    <td>
                      306.1 <span>(1965)</span>
                    </td>
                  </tr>

                  <tr>
                    <td>May</td>
                    <td>
                      46.5 <span>(31/1988)</span>
                    </td>
                    <td>
                      7.0 <span>(09/1997)</span>
                    </td>
                    <td>
                      241.5 <span>(1987)</span>
                    </td>
                  </tr>

                  <tr>
                    <td>June</td>
                    <td>
                      46.2 (17 /1995)<span>(18/1979)</span>
                    </td>
                    <td>
                      12.0 (02/1979)<span>(03/1997)</span>
                    </td>
                    <td>
                      380.2 <span>(1971)</span>
                    </td>
                  </tr>

                  <tr>
                    <td>July</td>
                    <td>
                      45.0 <span>(01/1964)</span>
                    </td>
                    <td>
                      15.5 <span>(25/1993)</span>
                    </td>
                    <td>
                      721.0 <span>(1977)</span>
                    </td>
                  </tr>

                  <tr>
                    <td>August</td>
                    <td>
                      40.2 <span>(14/2009)</span>
                    </td>
                    <td>
                      16.0 <span>(28/1997)</span>
                    </td>
                    <td>
                      716.3 <span>(1955)</span>
                    </td>
                  </tr>

                  <tr>
                    <td>September</td>
                    <td>
                      39.0 <span>(07/1987)</span>
                    </td>
                    <td>
                      12.4 <span>(30/1991)</span>
                    </td>
                    <td>
                      335.2 <span>(1992)</span>
                    </td>
                  </tr>

                  <tr>
                    <td>October</td>
                    <td>
                      38.3 <span>(01/2009)</span>
                    </td>
                    <td>
                      6.5 <span>(23/1990)</span>
                    </td>
                    <td>
                      253.0 <span>(1966)</span>
                    </td>
                  </tr>

                  <tr>
                    <td>November</td>
                    <td>
                      33.0 <span>(01/2007)</span>
                    </td>
                    <td>
                      1.0 <span>(28/2003)</span>
                    </td>
                    <td>
                      176.1 <span>(1986)</span>
                    </td>
                  </tr>

                  <tr>
                    <td>December</td>
                    <td>
                      27.0 <span>(04/1988)</span>{" "}
                    </td>
                    <td>
                      -1.4 <span>(21/2005)</span>{" "}
                    </td>
                    <td>
                      327.7 <span>(1990)</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Annual</td>
                    <td>
                      46.5 <span>(31/05/1988)</span>
                    </td>
                    <td>
                      -3.0 <span>(02/01/2008)</span>
                    </td>
                    <td>
                      2153.2 <span>(2006)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClimateMuzaffarabad;
