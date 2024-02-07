import React from "react";
import { Grid } from "@mui/material";
import option1 from "../assets/images/option1-1.jpg";
import option2 from "../assets/images/option2-1.jpg";
import option3 from "../assets/images/option3-1.jpg";
import option4 from "../assets/images/option4.jpg";
import gridConnector from "../assets/images/line.jpg";
import "../assets/css/RoofSeriesAdvantage.css";
import { Link } from "react-router-dom";

const RoofSeriesAdvantage = () => {
  return (
    <div className="root">
      <Grid container spacing={1}>
        <div className="grid-connector">
          <img src={gridConnector} alt="Line" />
        </div>
        <Grid item xs={12} sm={3} className="gridItem">
          <Link to="/support/front-end-design-support">
            <div className="paper">
              <div className="image-container">
                <img src={option1} alt="Image 1" />
                <div className="glass-overlay"></div>
              </div>
              <div className="text-overlay">
                Front-End <br /> <span>Design Support </span>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3} className="gridItem">
          <Link to="/support/custom-site-factory-training">
            <div className="paper">
              <div className="image-container">
                <img src={option2} alt="Image 1" />
                <div className="glass-overlay"></div>
              </div>
              <div className="text-overlay">
                classroom,factory & site <br /> <span>training </span>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3} className="gridItem">
          <Link to="/support/site-support-installation">
            <div className="paper">
              <div className="image-container">
                <img src={option3} alt="Image 1" />
                <div className="glass-overlay"></div>
              </div>
              <div className="text-overlay">
                site, support & <br /> <span>installation </span>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3} className="gridItem">
          <Link to="/support/maintenance-warranty">
            <div className="paper">
              <div className="image-container">
                <img src={option4} alt="Image 1" />
                <div className="glass-overlay"></div>
              </div>
              <div className="text-overlay">
                maintenance & <br />
                <span>warranty </span>
              </div>
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default RoofSeriesAdvantage;
