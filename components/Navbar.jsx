import React from "react";
import "../styles/navbar.scss";
import { IoIosCall } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="part1">
        <a className="logo" href="/">
          Better
        </a>
        <div className="dropdown">
          <a href="#">Buy</a>
          <div className="dropdown-content">
            <a href="#">Apply Now</a>
            <a href="#">Purchase rates</a>
            <a href="#">Affordability calculator</a>
            <a href="#">Mortage calculator</a>
            <a href="#">Rent vs buy calculator</a>
            <a href="#">Find an agent</a>
            <a href="#">VA loans</a>
            <a href="#">Learning center</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#">Refinance</a>
          <div className="dropdown-content">
            <a href="#">Apply now</a>
            <a href="#">Refinance rates</a>
            <a href="#">Cash-out refinance calculator</a>
            <a href="#">Learning Center</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#">HELOC</a>
          <div className="dropdown-content">
            <a href="#">Apply Now</a>
            <a href="#">Calculate your Cash 💵</a>
            <a href="#">HELOC vs. Cash-out Refinance</a>
            <a href="#">Learning Center</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#">Rates</a>
          <div className="dropdown-content">
            <a href="#">Purchase mortage rates</a>
            <a href="#">Refinance rates</a>
            <a href="#">Refinance cash-out rates</a>
            <a href="#">HELOC rates</a>
            <a href="#">Purchase VA rates</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#">Better+</a>
          <div className="dropdown-content">
            <a href="#">Get Insurance</a>
            <a href="#">Title and Closing</a>
            <a href="#">Better Attorney Match</a>
            <a href="#">Learning Center</a>
            <a href="#">Better Agent Match</a>
            <a href="#">Better Duo</a>
          </div>
        </div>
      </div>
      <div className="part2">
        <a href="#" className="callus">
          <IoIosCall />
        </a>
        <a href="#">Sign in</a>
      </div>
    </div>
  );
};

export default Navbar;
