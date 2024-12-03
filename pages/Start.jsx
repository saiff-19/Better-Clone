import Footer from "@/components/Footer";
import better1 from "../Assets/bettermortage.png";
import buyinghome from "../Assets/buyinghome.png";
import refinance from "../Assets/refinance.png";
import getcash from "../Assets/getcash.png";
import betsy from "../Assets/bettey.png";
import { BiDollarCircle } from "react-icons/bi";
import { TbCirclePercentage } from "react-icons/tb";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

import React from "react";
import "../styles/start.scss";
import Image from "next/image";

const Start = () => {
  return (
    <div className="startContainer">
      <div className="startnav">
        <div className="upper">
          <a href="/">
            <Image src={better1} alt="img" />
          </a>
          <button type="button">
            <IoCallOutline />
            Need help? Call (415) 523 8837
          </button>
        </div>
        <div className="lower">
          <hr />
          <Image src={betsy} alt="img" />
        </div>
      </div>
      <div className="uppertext">
        <h2>Hi, I'm Betsy! </h2>
        <h3>What can I help you with?</h3>
        <button type="button">
          <Image src={buyinghome} alt="img" />
          <p>Buying a home</p>
        </button>
        <button type="button">
          <Image src={refinance} alt="img" />
          <p>Refinance my mortage</p>
        </button>
        <button type="button">
          <Image src={getcash} alt="img" />
          <p>Get cash from my home</p>
        </button>
      </div>
      <div className="lowertext">
        <span>
          <h3>$100 B</h3>
          <p>home loans funded entirely online</p>
        </span>
        <span>
          <h3>400 K</h3>
          <p>Customers who chose a Better Mortage</p>
        </span>
      </div>
      <div className="box">
        <h4>After a few questions, you'll unlock:</h4>
        <p>
          <TbCirclePercentage />
          Custom mortgage rates
        </p>
        <p>
          <BiDollarCircle />
          Exclusive offers
        </p>
        <p>
          <FaMobileScreenButton />A personalized dashboard
        </p>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Start;
