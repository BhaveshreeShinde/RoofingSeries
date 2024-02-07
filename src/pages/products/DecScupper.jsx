import { Container, Grid } from "@mui/material";
import LandingPageSmall from "../../components/LandingPageSmall";
import { Link } from "react-router-dom";
import "../../assets/css/product.css";
import product6 from "../../assets/images/product-6.jpg";

const DecScupper = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall landingImg={product6} heading="DEC-SCUPPER" />
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={7}>
            <h1>DEC-SCUPPER</h1>
            <p>
              The Dec-Scupper is the ideal through wall drain to use with
              RoofingSeries membranes. The PVC construction enables the membrane
              to be heat welded directly to the scupper to ensure waterproofing.
              The one-piece construction makes it easy to install and the
              rigidity of the scupper allows on site workability to be
              increased. The scupper is 19 inches long and has a 2 1/2" outside
              diameter, sloped outlet pipe
            </p>
            <h3>COMPOSITION</h3>
            <p>RoofingSeries Dec-Scuppers are composed of aluminum</p>
            <h3>BENEFITS:</h3>
            <li>
              {" "}
              Solid one-piece design eliminates potential leaks within the
              scupper
            </li>
            <li> Can heat weld directly to flange</li>
            <h3>PACKAGING</h3>
            <p>Sold in single units</p>
            <h3>INSTALLATION</h3>
            <p>Membrane must be thermally heat welded to flange.</p>
            <p>
              For full details, please refer to{" "}
              <Link
                to="/installation"
                style={{ textDecoration: "none", color: "#7fb180" }}>
                RoofingSeries Installation Guide.
              </Link>{" "}
              and
              <Link
                to="/installation"
                style={{ textDecoration: "none", color: "#7fb180" }}>
                Thermal Heat Welding Instructions.
              </Link>{" "}
            </p>
            <h3>MAINTENANCE</h3>

            <p>
              Keep outlet clear of debris. Regular maintenance inspections must
              be scheduled to ensure outlet is clear of tree leaves/needles,
              debris, etc.
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

export default DecScupper;
