import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Button } from "@mui/material";
import slide1 from "../assets/images/main-header-3-1.jpg";
import slide2 from "../assets/images/waterproof1-1.jpg";
import slide3 from "../assets/images/training-1.jpg";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  return (
    <Carousel>
      <div className="box">
        <div className="inner-box">
          <img src={slide1} alt="" />
          <div className="inner-box-text">
            <p className="inner-box-heading-p">PREMIUM</p>
            <h1 className="inner-box-heading-h1">MODULAR ROOFING</h1>
            <p className="inner-box-heading-em">
              <em>OUR PEOPLE. OUR PRODUCTS. YOUR SOLUTION.</em>
            </p>
            <Link to="/products">
              <Button className="inner-box-button">
                VIEW ROOFINGSERIES EPDM / PVC <br />
                MEMBRANES & ACCESSORIES
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="inner-box">
          <img src={slide2} alt="" />
          <div className="inner-box-text">
            <p className="inner-box-heading-p" style={{ fontSize: "1.6em" }}>
              THE MOST IMPORTANT PART OF YOUR BUILDING
            </p>
            <h1 className="inner-box-heading-h1">WATER-PROOFED</h1>
            <p className="inner-box-heading-em">
              <em>100% SEALED</em>
            </p>
            <Link to="/support/front-end-design-support">
              <Button className="inner-box-button">
                THE ROOFINGSERIES <br />
                ADVANTAGE
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="inner-box">
          <img src={slide3} alt="" />
          <div className="inner-box-text">
            <p className="inner-box-heading-p">DETAILED</p>
            <h1 className="inner-box-heading-h1">INSTALLATION</h1>
            <p className="inner-box-heading-em">
              <em>INFORMATION & INSTRUCTIONS</em>
            </p>
            <Link to="/installation">
              <Button className="inner-box-button">
                INSTALLING THE <br />
                ROOFSERIES MEMBRANE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
