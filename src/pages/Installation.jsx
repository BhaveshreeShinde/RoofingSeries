import { Box, Container } from "@mui/system";
import LandingPage from "../components/LandingPage";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/css/installation.css";
import installation from "../assets/images/installation.jpg";
const Installation = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <LandingPage heading="Installation" landingImg={installation} />
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={7}>
              <h3>ROOFINGSERIES PVC MEMBRANE</h3>
              <p>
                To help ensure proper installation of our exclusive
                RoofingSeries PVC Membrane and Accessories, please refer to the{" "}
                <b>Installation Guide.</b> You will find best known methods of
                application, helpful tips and support to make the installation
                process easier.
              </p>
              <p>
                To further support the installation process, we have created a{" "}
                <b>Thermal Heat Welding Guide.</b> This guide will help coach
                the applicator with the use of the appropriate tools, proper
                safety precautions to be taken, heat welding techniques,
                expected outcomes, and support by way of a troubleshooting
                chart.
              </p>
              <p>
                Basic roof maintenance should be expected and planned for. This
                helps to ensure the longevity and water tightness of your
                RoofingSeries PVC system. We have made
                <b> Maintenance Suggestions</b>
                that will help anyone better assess the roof long after it has
                left the factory.
              </p>
              <h2>MULEHIDE EPDM INSTALLATION INFORMATION</h2>
              <Link
                to="https://www.mulehide.com/productcategory/roofing-products/modular-roofing-systems/modular-epdm-systems/installation-videos"
                style={{ textDecoration: "none", color: "#7fb180" }}>
                Click here for Installation Information
              </Link>
            </Grid>
            <Grid item xs={12} md={5}>
              <button className="homebutton">
                <a
                  href="http://www.roofing-series.com/site/templates/repository/modular-installation-guide.pdf"
                  target="_blank">
                  PVC & EPDM Installation Guides
                </a>
              </button>
              <button className="homebutton">
                <a
                  href="https://passthrough.fw-notify.net/static/552247/downloader.html"
                  target="_blank">
                  Thermal Heat Welding Guide
                </a>
              </button>
              <button className="homebutton">
                <a
                  href="http://www.roofing-series.com/site/templates/repository/maintenance-suggestions.pdf"
                  target="_blank">
                  Maintenance Suggestions
                </a>
              </button>
              <button className="homebutton">
                <a
                  href="https://passthrough.fw-notify.net/static/807331/downloader.html"
                  target="_blank">
                  Frequently Asked Questions
                </a>
              </button>
              <button className="lastbutton">
                <a
                  href="https://www.youtube.com/watch?v=yilZgrEg6Z8"
                  rel="media-gallery">
                  View Fire Test Video
                </a>
              </button>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Installation;
