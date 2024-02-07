import { Container, Grid } from "@mui/material";
import LandingPageSmall from "../../components/LandingPageSmall";
import { Link } from "react-router-dom";
import "../../assets/css/product.css";
import product3 from "../../assets/images/product-3.jpg";

const EpdmWba = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall landingImg={product3} heading="EPDM WBA" />
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={7}>
            <h1>EPDM WATER BASED ADHESIVE (EPDM WBA)</h1>
            <p>intro</p>
            <h3>USES</h3>
            <p>
              RoofingSeries EPDM WBA is designed for bonding EPDM membranes to
              OSB, plywood and other acceptable substrates for modular
              installations.
            </p>

            <h3>AREAS OF APPLICATION:</h3>
            <li> Oriented Strand Board (OSB)</li>
            <li>Min. 5/8” T&G plywood</li>
            <p>Directly applied to bareback membrane substrates.</p>
            <h3>PRODUCT DATA:</h3>
            <li> Composition - Liquid</li>
            <li>Color - White (dries clear)</li>
            <li>VOC Content -</li>
            <li>
              Packaging - 5 gal (18.9L)pails; 45lbs (20.4kg) per pail; 48 pails
              per pallet
            </li>
            <h3>STORAGE</h3>
            <p>
              RoofingSeries EPDM WBA should be kept in a dry area between 40*F
              (4*C) and 100*F (38*C) with careful handling to prevent damage to
              products. Do not store at high temperatures or in direct sunlight.
              Keep lids tightly closed when not in use. Protect all materials
              from freezing and other damage during transit, handling, storage,
              and installation.
            </p>

            <h3>SHELF LIFE</h3>
            <p>
              12 months if stored properly in original unopened, sealed and
              undamaged packaging.
            </p>

            <h3>APPLICATION INSTRUCTIONS</h3>
            <p>Stir adhesive thoroughly before and during use.</p>
            <p>
              Please refer to the{" "}
              <Link
                to="/installation"
                style={{ textDecoration: "none", color: "#7fb180" }}>
                RoofingSeries Installation Guide.
              </Link>{" "}
            </p>
            <h3>PRODUCT LIMITATIONS:</h3>
            <li>
              Bonding surfaces must be clean, dry, smooth, free of sharp fins
              and edges, loose and foreign materials, oil and grease, and any
              other contaminants.
            </li>
            <li>
              Use only when temperatures will not fall below freezing at anytime
              48 hours prior to or after mating of EPDM to substrate
            </li>

            <h3>AVAILABILITY</h3>
            <p>Sold exclusively through Skyline Building Systems</p>
          </Grid>
          <Grid item xs={12} md={5}>
            <button className="homebutton">
              <a
                href="http://www.roofing-series.com/site/templates/repository/sds/Roofing%20Series%20EPDM%20WBA%20SDS.pdf"
                target="_blank"
                rel="media-gallery">
                Download Safety Data Sheet
              </a>
            </button>
            <button className="homebutton">
              <a
                href="http://www.roofing-series.com/site/templates/repository/PDS-EPDM-WBA.pdf"
                target="_blank"
                rel="media-gallery">
                Download Product Data Sheet
              </a>
            </button>
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

export default EpdmWba;
