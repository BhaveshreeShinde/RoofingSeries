import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../assets/css/Home.css";
import slide1 from "../assets/images/main-header-3-1.jpg";
import slide2 from "../assets/images/waterproof1-1.jpg";
import slide3 from "../assets/images/training-1.jpg";
import { Button, Typography } from "@mui/material";
import RoofSeriesAdvantage from "../components/RoofSeriesAdvantage";

const Home = () => {
  const options = {
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    dots: true,
  };

  return (
    <div className="container">
      <Slider {...options}>
        <div className="box">
          <div className="inner-box">
            <img src={slide1} alt="" />
            <div className="inner-box-text">
              <p className="inner-box-heading-p">PREMIUM</p>
              <h1 className="inner-box-heading-h1">MODULAR ROOFING</h1>
              <p className="inner-box-heading-em">
                <em>OUR PEOPLE. OUR PRODUCTS. YOUR SOLUTION.</em>
              </p>
              <Button className="inner-box-button">
                VIEW ROOFINGSERIES EPDM / PVC <br />
                MEMBRANES & ACCESSORIES
              </Button>
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
              <Button className="inner-box-button">
                THE ROOFINGSERIES <br />
                ADVANTAGE
              </Button>
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
              <Button className="inner-box-button">
                INSTALLING THE <br />
                ROOFSERIES MEMBRANE
              </Button>
            </div>
          </div>
        </div>
      </Slider>

      <div className="mid-section-content">
        <Typography className="mid-section-text">
          Skyline Building Systems Inc. has been covering Canada and the United
          States Modular Roofing needs since 1976 with RoofingSeries EPDM and
          PVC solutions. With 38 years of history as a well-established
          business, we've been the trusted distributor of reliable, high-quality
          PVC and EPDM roofing system solutions to countless customers in North
          America.
        </Typography>

        <Typography className="mid-section-text">
          The advantage of choosing RoofingSeries PVC and EPDM modular roofing
          solutions is crystal clear. All white membranes are Cool Roof Rated,
          water tight, custom cut and welded to exact specifications enabling
          just-in-time manufacturing and delivery. RoofingSeries customers enjoy
          peace of mind with over 30 years of proven experience plus a full line
          of system specific accessories. RoofingSeries PVC modular membranes
          are the only product on the market to utilize spreadcoat technology,
          eliminating the risk of delamination and are backed by top warranties
          in the industry.
        </Typography>
      </div>

      <RoofSeriesAdvantage />
    </div>
  );
};

export default Home;
