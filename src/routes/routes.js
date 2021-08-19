import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import About from "../apps/about";
import ClimateGilgit from "../apps/climate-record/gilgit";
import ClimateIslamabad from "../apps/climate-record/islamabad";
import ClimateKarachi from "../apps/climate-record/karachi";
import ClimateLahore from "../apps/climate-record/lahore";
import ClimateMuzaffarabad from "../apps/climate-record/muzaffrabad";
import ClimatePeshawar from "../apps/climate-record/peshawar";
import ClimateQuetta from "../apps/climate-record/quetta";
import Contact from "../apps/contact";
import Guillines from "../apps/guidlines";
import Main from "../apps/mian";
import MonsoonRainfall from "../apps/monsoon_2021_rainfall";

class Routes extends Component {
  
    render() {
      return (
        <>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                
                <Route path="/contact">
                    <Contact/>
                </Route>

                <Route path="/guidlines">
                    <Guillines/>
                </Route>
                <Route path="/monsoon_2021_rainfall">
                    <MonsoonRainfall/>
                </Route>

                <Route path="/climate-record/islamabad/">
                    <ClimateIslamabad/>
                </Route>
                <Route path="/climate-record/karachi/">
                    <ClimateKarachi/>
                </Route>
                <Route path="/climate-record/lahore/">
                    <ClimateLahore/>
                </Route>
                <Route path="/climate-record/peshawar/">
                    <ClimatePeshawar/>
                </Route>
                <Route path="/climate-record/quetta/">
                    <ClimateQuetta/>
                </Route>
                <Route path="/climate-record/gilgit/">
                    <ClimateGilgit/>
                </Route>
                <Route path="/climate-record/muzaffarabad/">
                    <ClimateMuzaffarabad/>
                </Route>


                <Route path="/">
                    <Main />
                </Route>
              <Redirect to="/" />
            </Switch>
          
        </>
      );
    }
  }
  export default Routes;
  