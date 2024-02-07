import { Container, Grid } from "@mui/material";
import LandingPageSmall from "../../components/LandingPageSmall";
import { Link } from "react-router-dom";
import "../../assets/css/product.css";
import product4 from "../../assets/images/product-4.jpg";

const RoofingSeriesPipeboots = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall
        landingImg={product4}
        heading="ROOFINGSERIES PIPEBOOTS"
      />
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={7}>
            <h1>ROOFINGSERIES PIPEBOOTS</h1>
            <p>
              One of the most common details to complete is the through
              penetration or pipe penetration detail. We make it easy for the
              installer to complete this by offering our
              prefabricatedRoofingSeries Pipeboots. These are made using our
              RoofingSeries PVC Membrane and are available in conical or
              cylindrical form. We offer various dimensions on each and can even
              be called upon to custom make to order these thus satisfying our
              customer’s unique requirements.
            </p>
            <p>
              <b>Why choose conical vs. cylindrical?</b>
            </p>
            <p>
              Conical sizes are a universal fit for penetrations 1”-6”. Proper
              installation method would see that the void between the
              RoofingSeries 1”-6” Universal Boot and the pipe be filled with
              insulation to prevent condensation along the pipe coming through
              above roofline. Cylindrical sizes are a precise tight fit to the
              penetration to prevent any condensation build up along the pipe.
            </p>
            <p>
              <b>Common conical sizes available: </b>1"-6" Universal Boot
            </p>
            <p>
              <b>Common cylindrical sizes available: </b>3", 4", 5", 9" (inside
              diameter)
            </p>
            <p>
              *Custom fabricated pipeboots can be made to order beyond our
              standard offerings.
            </p>
            <h3>COMPOSITION</h3>
            <p>
              RoofingSeries Prefabricated Pipeboots are made from our
              RoofingSeries membranes.
            </p>
            <h3>BENEFITS:</h3>
            <li>
              {" "}
              Guaranteed compatibility with the RoofingSeries membrane used on
              the roof
            </li>
            <li>Thermally heat weldable</li>
            <li>Ensures 100% watertightness at a critical point</li>
            <li>Universal fit conical and cylindrical boots available</li>
            <li>Accommodates 1”-6” openings</li>
            <li>Allows for a precise fit over a pipe penetration</li>

            <h3>PACKAGING</h3>
            <p>
              Common sizes are readily stocked. Custom sizes require a lead
              time. All are packaged per required amount requested.
            </p>
            <h3>INSTALLATION</h3>
            <p>
              RoofingSeries lower flange is heat welded into place with a hand
              held hot-air welder and roller. The top is then clamped to the
              stack/pipe using an appropriate tightening ring. A bead of
              RoofingSeries compatible sealant is used to finish the detail by
              sealing around the top of the pipeboot and against the stack/pipe.
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
              </Link>
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

export default RoofingSeriesPipeboots;
