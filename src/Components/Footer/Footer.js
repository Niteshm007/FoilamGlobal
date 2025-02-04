import React from "react";
import "./Footer.css";
import { IoMdTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for routing

export default function Footer() {
  const tasks1 = ["Insulation Material", "Coated Paper", "Woven Materials"];

  return (
    <div className="Footer">
      <div className="container">
        <div className="row w-f">
          {/* About Us section */}
          <div className="col-md-4">
            <div className="left-f">
              <h3>About Us</h3>
              <p className="pr-sz">
                FoiLam Global is putting the new technology and Machines in its
                production to find the best way to fulfil the client’s
                Requirements for Solvent base Products. We always continuously
                emphasize on an unfazed focus towards the satisfaction and
                success of the client. Our strength lies in Export oriented
                work, well plan infrastructure, in house R&D facility and our
                experienced staff members. Most of the team members have
                expertise in the field of creative products Laminating
                materials, and the manufacturing of Laminated Aluminium Foil and
                Metalized Products.
              </p>
            </div>
          </div>

          {/* Products section */}
          <div className="col-md-4">
            <div className="mid-f">
              <h3>Our Products</h3>
              <ul>
                <li>
                  <Link to="/Ply">Ply Laminated Foil</Link>{" "}
                  {/* Link to PInsulation page */}
                </li>
                <li>
                  <Link to="/Insulation">Insulation Industries</Link>{" "}
                  {/* Link to PInsulation page */}
                </li>
                <li>
                  <Link to="/Metalized">Metalized Film Laminated Material</Link>{" "}
                  {/* Link to PInsulation page */}
                </li>
                <li>
                  <Link to="/Barrier">Barrier Film Insulation Material</Link>{" "}
                  {/* Link to PInsulation page */}
                </li>
                <li>
                  <Link to="/Food">Food & Baverages Industries</Link>{" "}
                  {/* Link to PInsulation page */}
                </li>
                {/* <li>
                  <Link to="/products/PE">PE Coated Paper</Link>{" "}
                </li> */}
              </ul>
            </div>
          </div>

          {/* Contact section */}
          <div className="col-md-4">
            <div className="rgt-f">
              <h3>Contact</h3>
              <div className="r-cont d-flex">
                <div className="logo">
                  <IoMdTime className="f-icon" />
                </div>
                <div className="txt">
                  <p>Mon - Sun: 8.00 AM - 8.00 PM</p>
                </div>
              </div>
              <div className="r-cont d-flex">
                <div className="logo">
                  <FaLocationDot className="f-icon" />
                </div>
                <div className="txt">
                  <p>
                    Plot No 69 Vivekanand Industrial Park, Nr. Shivbhumi Ind.
                    Park, Kubadthal, Ahmedabad Indore Highway, Ahmedabad -
                    Gujarat - India - 382430
                  </p>
                </div>
              </div>
              <div className="r-cont d-flex">
                <div className="logo">
                  <FaPhone className="f-icon" />
                </div>
                <div className="txt">
                  <p>90234 07993</p>
                </div>
              </div>
              <div className="r-cont d-flex">
                <div className="logo">
                  <FiMail className="f-icon" />
                </div>
                <div className="txt">
                  <p>sales.foilamglobal@gmail.com</p>
                </div>
              </div>
              <div className="ftr-social">
                <a href="" target="_blank">
                  <FaFacebook className="ftr-icn" />
                </a>
                <a href="" target="_blank">
                  <FaLinkedin className="ftr-icn" />
                </a>
                <a href="" target="_blank">
                  <FaInstagram className="ftr-icn" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
