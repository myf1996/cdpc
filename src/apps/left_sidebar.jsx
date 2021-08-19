import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

// Monthly Climate Summary Imports
import Pakistan_Monthly_Climate_Summary_August_2020 from "../assets/reports/monthly-climate-summary/Pakistan_Monthly_Climate_Summary_August_2020.pdf";
import Pakistan_Monthly_Climate_Summary_September_2020 from "../assets/reports/monthly-climate-summary/Pakistan_Monthly_Climate_Summary_September_2020.pdf";
import Pakistan_Monthly_Climate_Summary_October_2020 from "../assets/reports/monthly-climate-summary/Pakistan_Monthly_Climate_Summary_October_2020.pdf";
import Pakistan_Monthly_Climate_Summary_November_2020 from "../assets/reports/monthly-climate-summary/Pakistan_Monthly_Climate_Summary_November_2020.pdf";
import Pakistan_Monthly_Climate_Summary_December_2020 from "../assets/reports/monthly-climate-summary/Pakistan_Monthly_Climate_Summary_December_2020.pdf";
import Pakistan_Monthly_Climate_Summary_January_2021 from "../assets/reports/monthly-climate-summary/Pakistan_Monthly_Climate_Summary_January_2021.pdf";
import Pakistan_Monthly_Climate_Summary_February_2021 from "../assets/reports/monthly-climate-summary/Pakistan_Monthly_Climate_Summary_February_2021.pdf";
import Pakistan_Monthly_Climate_Summary_March_2021 from "../assets/reports/monthly-climate-summary/Pakistan_Monthly_Climate_Summary_March_2021.pdf";
import Pakistan_Monthly_Climate_Summary_April_2021 from "../assets/reports/monthly-climate-summary/Pakistan_Monthly_Climate_Summary_April_2021.pdf";
import Pakistan_Monthly_Climate_Summary_May_2021 from "../assets/reports/monthly-climate-summary/Pakistan_Monthly_Climate_Summary_May_2021.pdf";
import Pakistan_Monthly_Climate_Summary_June_2021 from "../assets/reports/monthly-climate-summary/Pakistan_Monthly_Climate_Summary_June_2021.pdf";
import Pakistan_Monthly_Climate_Summary_July_2021 from "../assets/reports/monthly-climate-summary/Pakistan_Monthly_Climate_Summary_July_2021.pdf";

// Eclipse Import
import solar_eclipse from "../assets/reports/eclipse/Solar_Eclipse_14-12-2020.jpg";
import eclipses_2016 from "../assets/reports/eclipse/eclipses-2016.pdf";
import eclipses_2017 from "../assets/reports/eclipse/eclipses-2017.pdf";
import eclipses_2018 from "../assets/reports/eclipse/eclipses-2018.pdf";
import eclipses_2019 from "../assets/reports/eclipse/eclipses-2019.pdf";
import eclipses_2020 from "../assets/reports/eclipse/eclipses-2020.pdf";
import eclipses_2021 from "../assets/reports/eclipse/eclipses-2021.pdf";

// Lunar Calander Import
import probable2016 from "../assets/reports/lunar-calender/probable2016.pdf";
import probable2017 from "../assets/reports/lunar-calender/probable2017.pdf";
import probable2018 from "../assets/reports/lunar-calender/probable2018.pdf";
import probable2019 from "../assets/reports/lunar-calender/probable2019.pdf";
import probable2020 from "../assets/reports/lunar-calender/probable2020.pdf";
import probable2021 from "../assets/reports/lunar-calender/probable2021.pdf";

// Lunar Calander Import
import Sun_Rise_Set_Timings_ISLAMABAD from "../assets/reports/sun-set-rise/Sun_Rise_Set_Timings_ISLAMABAD.txt";
import SUN_Rise_Set_Timings_KARACHI from "../assets/reports/sun-set-rise/SUN_Rise_Set_Timings_KARACHI.txt";
import SUN_Rise_Set_Timings_QUETTA from "../assets/reports/sun-set-rise/SUN_Rise_Set_Timings_QUETTA.txt";
import SUN_Rise_Set_Timings_PESHAWAR from "../assets/reports/sun-set-rise/SUN_Rise_Set_Timings_PESHAWAR.txt";
import SUN_Rise_Set_Timings_LAHORE from "../assets/reports/sun-set-rise/SUN_Rise_Set_Timings_LAHORE.txt";
import SUN_Rise_Set_Timings_GILGIT from "../assets/reports/sun-set-rise/SUN_Rise_Set_Timings_GILGIT.txt";
import SUN_Rise_Set_Timings_MUZAFFARABAD from "../assets/reports/sun-set-rise/SUN_Rise_Set_Timings_MUZAFFARABAD.txt";

// Rainfall Report Import
import monsoon2012rainfall from "../assets/reports/rainfall-report/monsoon2012rainfall.pdf";
import monsoon2013rainfall from "../assets/reports/rainfall-report/monsoon2013rainfall.pdf";
import monsoon2014rainfall from "../assets/reports/rainfall-report/monsoon2014rainfall.pdf";
import monsoon2015rainfall from "../assets/reports/rainfall-report/monsoon2015rainfall.pdf";
import monsoon2016rainfall from "../assets/reports/rainfall-report/monsoon2016rainfall.pdf";
import monsoon2017rainfall from "../assets/reports/rainfall-report/monsoon2017rainfall.pdf";
import monsoon2018rainfall from "../assets/reports/rainfall-report/monsoon2018rainfall.pdf";
import monsoon2019rainfall from "../assets/reports/rainfall-report/monsoon2019rainfall.pdf";
import monsoon2020rainfall from "../assets/reports/rainfall-report/monsoon2020rainfall.pdf";

const LeftSiderbar = (props) => {
  const [isOpenMonthlySummary, setIsOpenMonthlySummary] = useState(true);
  const toggleMonthlySummary = () => {
    setIsOpenLunar(false);
    setIsOpenClimateRecord(false);
    setIsOpenEclipse(false);
    setIsOpenSunRiseSet(false);
    setIsOpenMoonsoonRainfallReport(false);
    setIsOpenMonthlySummary(!isOpenMonthlySummary);
  };

  const [isOpenLunar, setIsOpenLunar] = useState(false);
  const toggleLunar = () => {
    setIsOpenMonthlySummary(false);
    setIsOpenClimateRecord(false);
    setIsOpenEclipse(false);
    setIsOpenSunRiseSet(false);
    setIsOpenMoonsoonRainfallReport(false);
    setIsOpenLunar(!isOpenLunar);
  };

  const [isOpenClimateRecord, setIsOpenClimateRecord] = useState(false);
  const toggleClimateRecord = () => {
    setIsOpenMonthlySummary(false);
    setIsOpenLunar(false);
    setIsOpenEclipse(false);
    setIsOpenSunRiseSet(false);
    setIsOpenMoonsoonRainfallReport(false);
    setIsOpenClimateRecord(!isOpenClimateRecord);
  };

  const [isOpenEclipse, setIsOpenEclipse] = useState(false);
  const toggleEclipse = () => {
    setIsOpenMonthlySummary(false);
    setIsOpenLunar(false);
    setIsOpenSunRiseSet(false);
    setIsOpenClimateRecord(false);
    setIsOpenMoonsoonRainfallReport(false);
    setIsOpenEclipse(!isOpenEclipse);
  };

  const [isOpenSunRiseSet, setIsOpenSunRiseSet] = useState(false);
  const toggleSunRiseSet = () => {
    setIsOpenMonthlySummary(false);
    setIsOpenLunar(false);
    setIsOpenEclipse(false);
    setIsOpenClimateRecord(false);
    setIsOpenMoonsoonRainfallReport(false);
    setIsOpenSunRiseSet(!isOpenSunRiseSet);
  };

  const [isOpenMoonsoonRainfallReport, setIsOpenMoonsoonRainfallReport] =
    useState(false);
  const toggleMoonsoonRainfallReport = () => {
    setIsOpenMonthlySummary(false);
    setIsOpenLunar(false);
    setIsOpenEclipse(false);
    setIsOpenClimateRecord(false);
    setIsOpenSunRiseSet(false);
    setIsOpenMoonsoonRainfallReport(!isOpenMoonsoonRainfallReport);
  };

  const monthlySummary = [
    {
      name: "July 2021",
      new: true,
      link: Pakistan_Monthly_Climate_Summary_July_2021,
    },
    {
      name: "June 2021",
      new: false,
      link: Pakistan_Monthly_Climate_Summary_June_2021,
    },
    {
      name: "May 2021 ",
      new: false,
      link: Pakistan_Monthly_Climate_Summary_May_2021,
    },
    {
      name: "April 2021",
      new: false,
      link: Pakistan_Monthly_Climate_Summary_April_2021,
    },
    {
      name: "March 2021",
      new: false,
      link: Pakistan_Monthly_Climate_Summary_March_2021,
    },
    {
      name: "February 2021",
      new: false,
      link: Pakistan_Monthly_Climate_Summary_February_2021,
    },
    {
      name: "Junuary 2021",
      new: false,
      link: Pakistan_Monthly_Climate_Summary_January_2021,
    },
    {
      name: "December 2020",
      new: false,
      link: Pakistan_Monthly_Climate_Summary_December_2020,
    },
    {
      name: "November 2020",
      new: false,
      link: Pakistan_Monthly_Climate_Summary_November_2020,
    },
    {
      name: "October 2020",
      new: false,
      link: Pakistan_Monthly_Climate_Summary_October_2020,
    },
    {
      name: "September 2020",
      new: false,
      link: Pakistan_Monthly_Climate_Summary_September_2020,
    },
    {
      name: "August 2020",
      new: false,
      link: Pakistan_Monthly_Climate_Summary_August_2020,
    },
  ];

  const climateRecord = [
    { name: "Islamabad", link: "/climate-record/islamabad/" },
    { name: "Karachi", link: "/climate-record/karachi/" },
    { name: "Lahore", link: "/climate-record/lahore/" },
    { name: "Peshawar", link: "/climate-record/peshawar/" },
    { name: "Quetta", link: "/climate-record/quetta/" },
    { name: "Gilgit", link: "/climate-record/gilgit/" },
    { name: "Muzaffarabad", link: "/climate-record/muzaffarabad/" },
  ];

  const eclipse = [
    { name: "December 2020 Solar Eclipse", link: solar_eclipse },
    { name: "2021", link: eclipses_2021 },
    { name: "2020", link: eclipses_2020 },
    { name: "2019", link: eclipses_2019 },
    { name: "2018", link: eclipses_2018 },
    { name: "2017", link: eclipses_2017 },
    { name: "2016", link: eclipses_2016 },
  ];

  const lunar = [
    { name: "2021", link: probable2021 },
    { name: "2020", link: probable2020 },
    { name: "2019", link: probable2019 },
    { name: "2018", link: probable2018 },
    { name: "2017", link: probable2017 },
    { name: "2016", link: probable2016 },
  ];

  const sunRiseShine = [
    { name: "Islamabad", link: Sun_Rise_Set_Timings_ISLAMABAD },
    { name: "Karachi", link: SUN_Rise_Set_Timings_KARACHI },
    { name: "Lahore", link: SUN_Rise_Set_Timings_LAHORE },
    { name: "Peshawar", link: SUN_Rise_Set_Timings_PESHAWAR },
    { name: "Quetta", link: SUN_Rise_Set_Timings_QUETTA },
    { name: "Gilgit", link: SUN_Rise_Set_Timings_GILGIT },
    { name: "Muzaffarabad", link: SUN_Rise_Set_Timings_MUZAFFARABAD },
  ];

  const rainfallReport = [
    // {name:"2021" ,link:monsoon2021rainfall},
    { name: "2020", link: monsoon2020rainfall },
    { name: "2019", link: monsoon2019rainfall },
    { name: "2018", link: monsoon2018rainfall },
    { name: "2017", link: monsoon2017rainfall },
    { name: "2016", link: monsoon2016rainfall },
    { name: "2015", link: monsoon2015rainfall },
    { name: "2014", link: monsoon2014rainfall },
    { name: "2013", link: monsoon2013rainfall },
    { name: "2012", link: monsoon2012rainfall },
    // {name:"2011" }
  ];

  return (
    <>
      <div className="leftsidebar">
        <Button className="collapse-btn" onClick={toggleMonthlySummary}>
          Monthly Climate Summary
        </Button>
        <Collapse isOpen={isOpenMonthlySummary}>
          <Card>
            <CardBody>
              <ul>
                {monthlySummary.map((item) => (
                  <li>
                    <a href={item.link}> {item.name} </a>{" "}
                    {item.new ? (
                      <span style={{ color: "red", fontWeight: 500 }}>
                        {" "}
                        NEW{" "}
                      </span>
                    ) : null}{" "}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </Collapse>

        <Button className="collapse-btn" onClick={toggleClimateRecord}>
          Climate Record
        </Button>
        <Collapse isOpen={isOpenClimateRecord}>
          <Card>
            <CardBody>
              <ul>
                {climateRecord.map((item) => (
                  <li>
                    <a href={item.link}>{item.name} </a>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </Collapse>

        <Button className="collapse-btn" onClick={toggleEclipse}>
          Eclipse
        </Button>
        <Collapse isOpen={isOpenEclipse}>
          <Card>
            <CardBody>
              <ul>
                {eclipse.map((item) => (
                  <li>
                    <a href={item.link}>{item.name} </a>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </Collapse>

        <Button className="collapse-btn" onClick={toggleLunar}>
          Lunar Calenders
        </Button>
        <Collapse isOpen={isOpenLunar}>
          <Card>
            <CardBody>
              <ul>
                {lunar.map((item) => (
                  <li>
                    <a href={item.link}>{item.name} </a>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </Collapse>

        <Button className="collapse-btn" onClick={toggleSunRiseSet}>
          Sun Rise & Set
        </Button>
        <Collapse isOpen={isOpenSunRiseSet}>
          <Card>
            <CardBody>
              <ul>
                {sunRiseShine.map((item) => (
                  <li>
                    <a href={item.link}> {item.name}</a>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </Collapse>

        <Button className="collapse-btn" onClick={toggleMoonsoonRainfallReport}>
          Moonsoon Rainfall Reports
        </Button>
        <Collapse isOpen={isOpenMoonsoonRainfallReport}>
          <Card>
            <CardBody>
              <ul>
                {rainfallReport.map((item) => (
                  <li>
                    <a href={item.link}>{item.name} </a>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </>
  );
};

export default LeftSiderbar;