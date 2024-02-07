import { Container, Grid } from "@mui/material";
import LandingPageSmall from "../../components/LandingPageSmall";
import { Link } from "react-router-dom";
import "../../assets/css/product.css";
import product9 from "../../assets/images/product-9.jpg";

const HeatWelder = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall
        landingImg={product9}
        heading="HEAT WELDER
"
      />
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={7}>
            <h1>HEAT WELDER</h1>
            <p>
              The RoofingSeries heat welder provides consistent heat and air
              flow, minimizing welding time and ensuring water tight seams. The
              rugged Hi-Impact body stands up to job site conditions and the
              ergonomic designed provides the greatest level of comfort. First
              rate quality is called for when installing RoofingSeries
              membranes. Ensure you have the best and prevent down time on the
              job-site.
            </p>

            <h3>FEATURES:</h3>

            <li> Double insulated</li>
            <li>230/120 Voltage</li>
            <li>Temperature range 68-1290*F (20 - 700*C)</li>
            <li>Air Flow approx. 250 I/min.</li>
            <li>Weight 2.8lbs (1.3Kg)</li>
            <h3>PACKAGING</h3>
            <p>1 each per box – accessories additional</p>
            <h3>TECHNICAL NOTES</h3>
            <p>
              <b> Caution – </b>when turning off, turn the heat dial to zero and
              leave running until welder blows cold air to prevent damage to the
              ceramic heat element.
            </p>
            <p>
              Do not point hot air at combustible products directly. The hot air
              could ignite the combustible causing a fire.
            </p>
            <p>
              For full details, please refer to{" "}
              <Link
                to="/installation"
                style={{ textDecoration: "none", color: "#7fb180" }}>
                Thermal Heat Welding Instructions.
              </Link>{" "}
            </p>
          </Grid>
          <Grid item xs={12} md={5}>
            <button className="lastbutton">
              <a href="/contact" rel="media-gallery">
                Contact Skyline
              </a>
            </button>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default HeatWelder;
