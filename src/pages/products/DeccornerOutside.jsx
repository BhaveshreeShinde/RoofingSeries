import { Container, Grid } from "@mui/material";
import LandingPageSmall from "../../components/LandingPageSmall";
import { Link } from "react-router-dom";
import "../../assets/css/product.css";
import product7 from "../../assets/images/product-7.jpg";

const DeccornerOutside = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall landingImg={product7} heading="DEC-CORNER – OUTSIDE" />
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={7}>
            <h1>DEC-CORNER – OUTSIDE</h1>
            <p>
              RoofingSeries Outside Corners make it simple for the installer to
              complete outside corner details while reducing the risk of
              leakage. These are made using our RoofingSeries membrane and are
              available commonly in 6”x6”x6” dimensions. If required, custom
              outside corners can be made to exact specifications.
            </p>
            <h3>COMPOSITION</h3>
            <p>
              RoofingSeries Outside Corners are made from our RoofingSeries
              membranes.
            </p>
            <h3>BENEFITS:</h3>
            <li>
              {" "}
              Guaranteed compatibility with the RoofingSeries membrane used on
              the roof
            </li>
            <li>Thermal heat weldable</li>
            <li>Ensures 100% watertightness at a critical point</li>
            <li>Common or custom dimensions meeting customer specifcations</li>

            <h3>PACKAGING</h3>
            <p>
              Common sizes are readily stocked. Custom sizes require a lead
              time. All are packaged per required amount requested.
            </p>
            <h3>INSTALLATION</h3>
            <p>
              After the curb or wall flashing membrane have been installed,
              RoofingSeries Outside Corners are thermally heat welded into place
              with a hand held hot air welder and roller. No caulking or
              sealants are necessary as this product is 100% designed to be
              thermally heat welded into place correctly.
            </p>
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

            <h3>AVAILABILITY</h3>
            <p>Available exclusively from RoofingSeries</p>
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

export default DeccornerOutside;
