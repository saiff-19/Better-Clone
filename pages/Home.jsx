// Ensure this is added at the top
"use client"; // Marks the component as a Client Component

import React from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js Router in App Router

import { MdOutlineTimer } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import hand from "../Assets/heroimg.webp";
import google from "../Assets/google.png";
import arian from "../Assets/findOut.png";
import trust from "../Assets/trustPilot.svg";
import buying from "../Assets/buying.png";
import mortage from "../Assets/mortage.png";
import heloc from "../Assets/heloc.png";
import insurance from "../Assets/insurance.png";
import Image from "next/image";
import "../styles/home.scss";
const Home = () => {
  const router = useRouter();

  const startLinker = (e) => {
    e.preventDefault();
    router.push("/Start");
  };

  const aboutHandler = (e) => {
    e.preventDefault();
    router.push("/About");
  };

  return (
    <div className="main">
      <div className="heroContainer">
        <div className="hero">
          <h1>Mortgages made simple</h1>

          <div className="hand">
            <Image src={hand} alt="Heroimg" />
          </div>

          <div className="start">
            <button type="button" onClick={startLinker}>
              Start my approval
            </button>
            <p>
              <MdOutlineTimer />3 min | No credit impact
            </p>
          </div>

          <div className="google">
            <Image src={google} alt="googleimg" />
            <p>4.6 Stars | 3177 Google reviews</p>
          </div>
        </div>
      </div>
      <div className="findout">
        <div className="withImg">
          <Image src={arian} alt="goodimg" />
          <div className="names">
            <button className="nameButton" type="button">
              Arian
            </button>
            <button className="nameButton" type="button">
              Amanda
            </button>
            <button className="nameButton" type="button">
              Paul
            </button>
          </div>
        </div>
        <div className="withoutImg">
          <h2>Find out why we’re better.</h2>
          <button type="button" onClick={aboutHandler}>
            see all our stories
          </button>
          <div className="text">
            <p className="span0">
              <Image src={trust} alt="trust" />
            </p>
            <p className="span1">Excellent 4.4</p>
            <p className="span2">out of 5</p>
          </div>
        </div>
      </div>
      <div className="gotaQues">
        <div className="headline">
          <div className="h2">
            <h2>Got questions?</h2>
            <h2> We've got answers</h2>
          </div>
          <div className="buttons">
            <button type="button">Our products</button>
            <button type="button">Calculators</button>
            <button type="button">Guides & FAQs</button>
          </div>
        </div>
        <div className="betterGrid">
          <div className="upper">
            <div className="boxsmall">
              <h3>Buying your first home with Better</h3>
              <button type="button">
                <IoMdArrowForward />
              </button>
              <Image src={buying} alt="myimg" />
            </div>
            <div className="boxBig1">
              <div className="content">
                <h3>One Day Mortgage</h3>
                <p>
                  Kick your home loan into hyperdrive. Going from locked rate to
                  Commitment Letter takes weeks for traditional lenders. We do
                  it in a single day. Traditional lenders deliver a Commitment
                  Letter in a few weeks
                </p>
                <button type="button">
                  <IoMdArrowForward />
                </button>
              </div>
              <div className="image">
                <Image src={mortage} alt="myimg" />
              </div>
            </div>
          </div>
          <div className="lower">
            <div className="boxBig2">
              <div className="image">
                <Image src={heloc} alt="myimg" />
              </div>
              <div className="content">
                <h3>Better HELOC</h3>
                <p>
                  Introducing One Day HELOC™—your express lane to getting cash
                  from your home with our Home Equity Line of Credit. Access up
                  to 90% of your home equity as cash in as little as 7 days
                </p>
                <button type="button">
                  <IoMdArrowForward />
                </button>
              </div>
            </div>
            <div className="boxsmall">
              <h3>Insurance</h3>
              <button type="button">
                <IoMdArrowForward />
              </button>
              <Image src={insurance} alt="myimg" />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Home;
