import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import better from "../Assets/better.svg";
import better1 from "../Assets/betterMortage.svg";
import better2 from "../Assets/betterreal.svg";
import better3 from "../Assets/bettercover.svg";
import better4 from "../Assets/betterinspect.svg";
import better5 from "../Assets/betterservices.svg";
import home1 from "../Assets/lender.svg";
import home2 from "../Assets/lender2.svg";
import Image from "next/image";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="upperFooter">
        <div className="better">
          <Image className="letterImg" alt="better" src={better} />
          <p>
            Better is a family of companies serving all your homeownership needs
          </p>
          <Image className="letterImg" alt="better" src={better1} />
          <p>
            We can’t wait to say “Welcome home.” Apply 100% online, with expert
            customer support.
          </p>
          <Image className="letterImg" alt="better" src={better2} />
          <p>
            Connect with a local Better Real Estate Partner Agent to find out
            all the ways you can save.
          </p>
          <Image className="letterImg" alt="better" src={better3} />
          <p>
            Shop, bundle, and save on insurance coverage for home, auto, life,
            and more.
          </p>
          <Image className="letterImg" alt="better" src={better4} />
          <p>
            Get free repair estimates, 24-hour turnarounds on reports, and rest
            easy with our 100-day inspection guarantee.
          </p>
          <Image className="letterImg" alt="better" src={better5} />
          <p>
            Get transparent rates when you shop for title insurance all in one
            convenient place.
          </p>
        </div>
        <div className="resources">
          <h3>Resources</h3>
          <p>Home affordability calculator</p>
          <p>Mortgage calculator</p>
          <p>Free mortgage calculator</p>
          <p>Mortgage calculator with taxes</p>
          <p>Mortgage calculator with PMI</p>
          <p>Rent vs buy calculator</p>
          <p>HELOC payment calculator</p>
          <p>HELOC vs cash-out refinance calculator</p>
          <p>Buy a home</p>
          <p>Sell a home</p>
          <p>Get home inspection</p>
        </div>
        <div className="company">
          <h3>About us</h3>
          <p>Careers</p>
          <p>Meadia</p>
          <p>Patner With us</p>
          <p>Learning center</p>
          <p>FAQs</p>
          <p>Investor Relations</p>
        </div>
        <div className="other">
          <h3>Contact Us</h3>
          <p>hello@better.com </p>
          <p>415-523-8837</p>
          <p>FAQ </p>
          <p>Glossary</p>
          <h4>Legal</h4>
          <p>NMLS Consumer Access</p>
          <p>Privacy Policy l</p>
          <p>Terms of Use</p>
          <p>Disclosures & Licensing</p>
          <p>Affiliated Business</p>
          <p>Browser Disclaimer</p>
          <Image alt="img" src={home1} className="homelogo" />
          <Image alt="img" src={home2} className="homelogo" />
        </div>
      </div>
      <div className="lowerFooter">
        <div className="socials">
          <FiFacebook className="logoSocial" />
          <FaInstagram className="logoSocial" />
          <FiLinkedin className="logoSocial" />
        </div>
        <div className="one">
          <p>
            1Better Mortgage’s One Day Mortgage™ promotion offers qualified
            customers who provide certain required financial
            information/documentation to Better Mortgage within 4 hours of
            locking a rate on a mortgage loan the opportunity to receive an
            underwriting determination from Better Mortgage within 24 hours of
            their rate lock. The underwriting determination is subject to
            customary terms, including fraud and anti-money laundering checks,
            that take place pre-closing and which may trigger additional
            required documentation from the customer. Better Mortgage does not
            guarantee that initial underwriting approval will result in a final
            underwriting approval. See One Day Mortgage™ Terms and Conditions.
          </p>
          <p>
            2Better Mortgage’s One Day HELOC™ promotion offers qualified
            customers who provide certain required financial
            information/documentation to Better Mortgage within 4 hours of
            locking a rate on a HELOC loan the opportunity to receive an
            underwriting determination from Better Mortgage within 24 hours of
            their rate lock. The underwriting determination is subject to
            customary terms, including fraud and anti-money laundering checks,
            that take place pre-closing and which may trigger additional
            required documentation from the customer. Better Mortgage does not
            guarantee that initial underwriting approval will result in final
            underwriting approval. See One Day Heloc™ Terms and Conditions.
          </p>
          <p>
            3Assumes borrowers are eligible for the Automated Valuation Model
            (AVM) to calculate their home value, their loan amount is less than
            $400,000, all required documents are uploaded to their Better
            Mortgage online account within 24 hours of application, closing is
            scheduled for the earliest available date and time, and a notary is
            readily available. Funding timelines may vary and may be longer if
            an appraisal is required to calculate a borrower’s home value.
          </p>
          <hr />
          <div className="two">
            <p>
              © 2024 Better Home & Finance Holding Company and/or its
              affiliates. Better is a family of companies. Better Mortgage
              Corporation provides home loans; Better Real Estate, LLC and
              Better Real Estate California Inc License # 02164055 provides real
              estate services; Better Cover, LLC sells insurance products; and
              Better Settlement Services provides title insurance services; and
              Better Inspect, LLC provides home inspection services. All rights
              reserved.
            </p>

            <p>New York State Housing and Anti-Discrimination Notice</p>
            <p>New York Standard Operating Procedures</p>
            <p>
              Texas Real Estate Commission: Information About Brokerage Services
              | Consumer Protection Notice
            </p>
            <p>
              Better Settlement Services, LLC. 325-41 Chestnut Street, Suite
              803, Philadelphia, PA 19106.
            </p>
            <p>
              Homeowners insurance policies are offered through Better Cover,
              LLC, a Pennsylvania Resident Producer Agency. License #881593.
              325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
            </p>
            <p>
              Insurance quotes and policies are offered through Better Cover,
              LLC. A Pennsylvania Resident Producer Agency. License #881593.
              Here is a full listing of Better Cover, LLC’s license numbers.
            </p>
            <p>
              Better Inspect, LLC maintains its corporate headquarters at 325-41
              Chestnut Street, Suite 846, Philadelphia, PA 19106.
            </p>
            <p>
              Better Mortgage Corporation, Better Real Estate, LLC, Better
              Settlement Services, LLC, Better Cover, LLC, Better Connect, and
              Better Inspect, LLC are separate operating subsidiaries of Better
              Home & Finance Holding Company. Each company is a separate legal
              entity operated and managed through its own management and
              governance structure as required by its state of incorporation,
              and applicable and legal and regulatory requirements. Products not
              available in all states.
            </p>
            <p>
              Any unauthorized use of any proprietary or intellectual property
              is strictly prohibited. All trademarks, service marks, trade
              names, logos, icons, and domain names are proprietary to Better
              Home & Finance Holding Company. Better Home & Finance Holding
              Company trademarks are federally registered with the U. S. Patent
              and Trademark Office. Better Cover is a registered trademark with
              the U.S. Patent and Trademark Office and is owned by Better Cover,
              LLC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
