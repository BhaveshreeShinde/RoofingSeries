import { Container, Grid } from "@mui/material";
import LandingPageSmall from "../../components/LandingPageSmall";
import { Link } from "react-router-dom";
import "../../assets/css/product.css";
import product5 from "../../assets/images/product-5.jpg";

const TerminationBar = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall landingImg={product5} heading="TERMINATION BAR" />
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={7}>
            <h1>TERMINATION BAR</h1>
            <p>
              Our weather resistant termination bar is used to secure fully
              adhered membranes to any vertical surface. Available in 2 choices:
              aluminum finished 9’ length profile or powder coated (colored)
              aluminum finished 10’ length profile.
            </p>

            <h3>COMPOSITION</h3>
            <p>Termination bars are composed of aluminum.</p>
            <h3>BENEFITS:</h3>
            <li>Light weight</li>
            <li>Manageable lengths</li>
            <li>Means one person can easily install.</li>
            <li>Predrilled holes every 6 inches</li>
            <li>Ensures proper installation and securement</li>
            <h3>PACKAGING</h3>
            <p>
              Made to order. Larger quantities will be palletized; smaller
              quantities will be placed inside cardboard tubes.
            </p>
            <h3>INSTALLATION</h3>
            <p>Commonly secured into place with an appropriate screw.</p>
            <p>
              For full details, please refer to{" "}
              <Link
                to="/installation"
                style={{ textDecoration: "none", color: "#7fb180" }}>
                RoofingSeries Installation Guide.
              </Link>{" "}
            </p>

            <h3>AVAILABILITY</h3>
            <p>Sold exclusively through Skyline Building Systems.</p>
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

export default TerminationBar;
