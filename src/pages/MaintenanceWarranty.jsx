import { Box, Container } from "@mui/system";
import LandingPageSmall from "../components/LandingPageSmall";
import { Grid } from "@mui/material";
import "../assets/css/header.css";
import support4 from "../assets/images/support4.jpg";

import { Link } from "react-router-dom";
import RoofSeriesAdvantage from "../components/RoofSeriesAdvantage";

const MaintenanceWarranty = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall
        landingImg={support4}
        heading="MAINTENANCE & WARRANTY"
      />

      <RoofSeriesAdvantage />

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={7}>
          <h1>MAINTENANCE & WARRANTY</h1>
          <h2>ROOFINGSERIES PRODUCTS</h2>
          <p>
            <Link
              to="http://www.roofing-series.com/site/templates/repository/warranty/R12000-10yr.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#7fb180" }}>
              R12000 10yr. Warranty
            </Link>
          </p>
          <p>
            <Link
              to="http://www.roofing-series.com/site/templates/repository/warranty/RR15000-15yr.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#7fb180" }}>
              RR15000 15yr. Warranty
            </Link>
          </p>
          <p>
            <Link
              to="http://www.roofing-series.com/site/templates/repository/warranty/R15000-15yr.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#7fb180" }}>
              R15000 15yr. Warranty
            </Link>
          </p>
          <p>
            <Link
              to="http://www.roofing-series.com/site/templates/repository/warranty/R20000-20yr.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#7fb180" }}>
              R20000 20yr. Warranty
            </Link>
          </p>
          <p>
            Material warranty’s exist for all RoofingSeries product offerings. A
            material and workmanship warranty can be established via our
            involvement with the installing contractor and certain criteria
            being met.
          </p>
          <h2>EPDM PRODUCTS</h2>
          <p>
            <Link
              to="https://www.mulehide.com/productcategory/roofing-products/modular-roofing-systems/modular-epdm-systems/warranty-information"
              target="_blank"
              style={{ textDecoration: "none", color: "#7fb180" }}>
              Mulehide Warranty Information
            </Link>
          </p>
        </Grid>
        <Grid item xs={12} md={5}>
          <h3>
            PROVIDING MAINTENANCE AND WARRANTIES FOR ALL OUR ROOFINGSERIES
            PRODUCTS. WHEN INSTALLED PROPERLY, ROOFINGSERIES MEMBRANES WILL NOT
            FAIL.
          </h3>
          <Box sx={{ display: "flex", margin: "30px" }} gap={2}>
            <div className="try">1</div>
            <div>
              <strong>10, 15 and 20 year warranties available.</strong>
            </div>
          </Box>
          <Box sx={{ display: "flex", margin: "30px" }} gap={2}>
            <div className="try">2</div>
            <div>
              <strong>
                Customer protection and peace of mind for PVC as well as EPDM
                solutions.
              </strong>
            </div>
          </Box>
          <Box sx={{ display: "flex", margin: "30px" }} gap={2}>
            <div className="try">3</div>
            <div>
              <strong>
                Reliabilty without compromise, the toughest membranes on the
                market.
              </strong>
            </div>
          </Box>

          <h3>TO GET YOUR PROJECT STARTED WITH ROOFINGSERIES MEMBRANES:</h3>

          <button className="lastbutton">
            <a href="/contact" rel="media-gallery">
              Contact Us Today
            </a>
          </button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MaintenanceWarranty;
