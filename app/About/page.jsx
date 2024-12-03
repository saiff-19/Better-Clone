import React from "react";
import vidimg from "../../Assets/vidimage.png";
import softbank from "../../Assets/softbank.svg";
import ally from "../../Assets/ally.svg";
import citi from "../../Assets/citi.svg";
import pinganbank from "../../Assets/pinganbank.svg";
import goldman from "../../Assets/goldman.svg";
import kpcb from "../../Assets/kpcb.svg";
import american from "../../Assets/american.svg";
import "../../styles/about.scss";
import Image from "next/image";
const About = () => {
  const events = [
    {
      year: 2014,
      description:
        "After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all. ",
    },
    {
      year: 2015,
      description:
        "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
    },
    {
      year: 2016,
      description:
        "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
    },
    {
      year: 2017,
      description:
        "Better expands into the real estate market with Better Real Estate.",
    },
    {
      year: 2018,
      description:
        "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
    },
    {
      year: 2019,
      description:
        "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
    },
    {
      year: 2021,
      description:
        "Better acquires Trussle — The UK’s most innovative online mortgage broker.",
    },
    {
      year: 2022,
      description:
        "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
    },
    {
      year: 2023,
      description: [
        "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
        "jdhsh",
        "jfhshjdhslkjad",
      ],
    },
    {
      year: "Today",
      description:
        "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
    },
  ];
  return (
    <div className="aboutContainer">
      <div className="section1">
        <h3>Our mission</h3>
        <h2>
          We’re making homeownership simpler, faster — and most importantly,
          more accessible for all Americans.
        </h2>
      </div>
      <div className="section2">
        <div className="left">
          <h3>The status quo is broken</h3>

          <p>
            The traditional processes around homeownership are opaque and
            stressful. Fees aren’t transparent and some are simply outrageous in
            size. Traditional mortgage lending is rife with unnecessary fees and
            slow, painful processes. It’s a system set up to benefit insiders —
            not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <button type="button">Read Vishal's Story</button>
        </div>
        <div className="right">
          <Image src={vidimg} alt="img" />
        </div>
      </div>
      <div className="section3">
        <h3>How we're changing things</h3>
        <p>
          Homeownership is a huge part of our economy. Housing overall is a $33
          trillion business, and mortgages account for $15 trillion. Yet home
          finance operates in the same way it has for decades — through opaque
          systems and expensive intermediaries whose interests are misaligned
          with consumers’.
        </p>
        <p>
          That’s why Better.com is redefining the homeownership process from the
          ground up. We’re using technology to make it faster and more
          efficient, and humans to help make it friendly and enjoyable.
        </p>
      </div>
      <div className="section4">
        <h3>Backed by</h3>
        <div className="companyLogos">
          <Image src={softbank} alt="img" />
          <Image src={ally} alt="img" />
          <Image src={citi} alt="img" />
          <Image src={pinganbank} alt="img" />
          <Image src={goldman} alt="img" />
          <Image src={kpcb} alt="img" />
          <Image src={american} alt="img" />
        </div>
        <h2>Company Timeline</h2>
        <div className="timeline-container">
          {events.map((event, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-year">{event.year}</div>
              <div
                className={`timeline-description ${
                  index % 2 === 0 ? "right" : "left"
                }`}
              >
                {event.description}
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>{" "}
          {/* Central line connecting all items */}
        </div>
      </div>
    </div>
  );
};

export default About;
