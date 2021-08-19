import React, { useState } from 'react';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
 } from "reactstrap";

import pmd_logo from '../assets/images/web-logo.png';
import gov_pak_logo from '../assets/images/gov_pak_logo.png';
import pmd_station from '../assets/images/pmd_station.jpg';
import rainfall from '../assets/images/rainfall.jpg';
import temperature from '../assets/images/temperature.jpg';

import climate_report_2020 from '../assets/reports/Pakistan_Climate_2020.pdf';
import climate_report_2019 from '../assets/reports/Pakistan_Climate_2019.pdf';

import challan_form from '../assets/reports/chalan-form.pdf';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="header">
        <div className="row">
          <div className="col-md-2">
            <div className="logo">
              <a href="/"><img className="logos" src={pmd_logo} alt="PMD_LOGO"/></a>
            </div>
          </div>
          <div className="col-md-8">
            <h4 className="header-heading4">Pakistan Meterological Department</h4>
            <h2 className="header-heading2">Climate Data Processing Center</h2>
          </div>
          <div className="col-md-2">
            <div className="logo">
              <img className="logos" src={gov_pak_logo} alt="PMD_LOGO"/>
            </div>
          </div>                  
        </div>
        <div className="row">
        <Navbar light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto navitem-center" navbar>
                <NavItem>
                  <NavLink href="/about">About CDPC</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">Contact</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href={challan_form}>Challan</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/guidlines">Guidlines</NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Maps
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                    <NavLink href={pmd_station}>PMD Stations</NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    <NavLink href={rainfall}>Rainfall</NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    <NavLink href={temperature}>Temperature</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  Pakistan's Climate
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink href={climate_report_2020}>2020</NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <NavLink href={climate_report_2019}>2019</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
          </Collapse>
        </Navbar>
                  
        </div>
     </div>
    </>
  );
};

export default Header;
