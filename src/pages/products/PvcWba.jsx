import { Container, Grid } from "@mui/material";
import LandingPageSmall from "../../components/LandingPageSmall";
import { Link } from "react-router-dom";
import "../../assets/css/product.css";
import product3 from "../../assets/images/product-3.jpg";

const PvcWba = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall landingImg={product3} heading="PVC WBA 200" />
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={7}>
            <h1>PVC WATER BASED ADHESIVE (WBA) 200</h1>
            <p>
              RoofingSeries PVC WBA 200 is a specifically formulated water-based
              adhesive used to fully adhere the RoofingSeries PVC Membrane of
              choice to clean, dry, horizontal, min. 5/8” T&G plywood. It comes
              in 5 gallon plastic pails. RoofingSeries PVC WBA 200 provides
              excellent workability at the time of application and aggressive
              grab characteristics providing long term performance and peace of
              mind. The PVC WBA 200 will be applied to the plywood substrate at
              a rate of 100-125 sqft/gal. The surface application allows the
              user to roll the RoofingSeries PVC Membrane into the Skyline
              RoofingSeries PVC WBA 200 and easily position it as required while
              the adhesive is still wet.
            </p>
            <h3>USES</h3>
            <p>
              RoofingSeries PVC WBA 200 is uniquely formulated to be compatible
              with RoofingSeries PVC Membranes. Most commonly used for
              horizontal application.
            </p>

            <h3>AREAS OF APPLICATION:</h3>
            <li>Min. 5/8” T&G plywood</li>
            <li> Dens-Deck Prime</li>
            <li>Isocyanurate Organic Facer</li>
            <li>Isocyanurate Glass Facer</li>
            <p>Directly applied to bareback membrane substrates.</p>

            <h3>PRODUCT DATA:</h3>
            <li> Composition - Liquid</li>
            <li>Color - Cream </li>
            <li>VOC Content - 120.4 g/l</li>
            <li>
              Packaging - 5 gal (18.9L)pails; 45lbs (20.4kg) per pail; 48 pails
              per pallet
            </li>
            <h3>STORAGE</h3>
            <p>
              RoofingSeries PVC WBA 200 should be kept in a dry area between
              40*F (4*C) and 100*F (38*C) with careful handling to prevent
              damage to products. Do not store at high temperatures or in direct
              sunlight. Keep lids tightly closed when not in use. Protect all
              materials from freezing and other damage during transit, handling,
              storage, and installation.
            </p>

            <h3>SHELF LIFE</h3>
            <p>
              12 months if stored properly in original unopened, sealed and
              undamaged packaging.
            </p>

            <h3>APPLICATION INSTRUCTIONS</h3>
            <p>
              The adhesive is used on horizontal min. 5/8” T&G plywood decks and
              applied at a rate of 100-125 sqft/gal.
            </p>
            <p>
              Please refer to the{" "}
              <Link
                to="/installation"
                style={{ textDecoration: "none", color: "#7fb180" }}>
                RoofingSeries Installation Guide.
              </Link>{" "}
            </p>
            <h3>PRODUCT LIMITATIONS:</h3>
            <li> Do not apply in wet weather or to a wet surface.</li>
            <li>
              The minimum ambient and surface temperatures should be 40*F (4*C)
              or greater 24 hours prior to application and after application.
            </li>
            <li>Do not allow the adhesive to skin over or dry.</li>
            <li>
              Eliminate uneven surfaces to ensure positive contact between the
              membrane and substrate.
            </li>
            <li>
              Do not apply to a surface that has not yet been cleared of dust
              and debris.
            </li>

            <h3>AVAILABILITY</h3>
            <p>Sold exclusively through Skyline Building Systems.</p>
          </Grid>
          <Grid item xs={12} md={5}>
            <button className="homebutton">
              <a
                href="http://roofing-series.com/site/templates/repository/sds/Roofing%20Series%20WBA%20200%20SDS.pdf"
                target="_blank"
                rel="media-gallery">
                Download SDS Sheet
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

export default PvcWba;
