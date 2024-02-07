import { Container, Grid } from "@mui/material";
import LandingPageSmall from "../../components/LandingPageSmall";
import { Link } from "react-router-dom";
import "../../assets/css/product.css";
import product10 from "../../assets/images/product-10.jpg";

const WhiteBack = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall landingImg={product10} heading="WHITE / BLACK EPDM" />
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={7}>
            <h1>WHITE / BLACK EPDM - NON REINFORCED (45MIL)</h1>
            <h3>OVERVIEW</h3>
            <p>
              EPDM is an extremely durable synthetic rubber roofing membrane
              (ethylene propylene diene monomer (M-Class rubber)) widely used in
              low-slope buildings in North America and worldwide. Its two
              primary ingredients, ethylene and propylene, are derived from oil
              and natural gas. EPDM is available in both white and black, and is
              sold in a broad variety of widths, ranging from nine feet to fifty
              feet, and in two thicknesses, 45 and 60 mils. EPDM can be
              installed either fully adhered, mechanically attached or
              ballasted, with the seams of the roofing system sealed with liquid
              adhesives or specially formulated tape.
            </p>
            <h3>COMPOSITION</h3>
            <p>Ethylene propylene diene monomer (M-class rubber)</p>
            <h3>BENEFITS:</h3>
            <li>
              {" "}
              Custom cut to lengths, with modular industry specific sheet
              widths. (9’,11’,13’,15’, 16' and 17’)
            </li>
            <li>The most economical single-ply membrane</li>
            <li>
              White EPDM reflects the sunlight and cools the building interior -
              leading to lower energy costs
            </li>
            <li>
              {" "}
              Black EPDM absorbs the sunlight and helps warm the building
              interior
            </li>
            <li>
              {" "}
              Excellent for fully adhered systems when using Water Base Bonding
              Adhesive - fast installation keeps lines moving
            </li>

            <h3>CODES AND APPROVALS</h3>
            <p>
              FM Approved; UL; ULC; Cool Roof Rated (white); meets or exceeds
              ASTM standards
            </p>
            <h3>PACKAGING</h3>
            <p>
              Modular widths are predetermined at 9', 11' , 13', 15' and 17'
              wide. Cut to length options available in any length required.
              Placed on a core with an appropriate wrap and tag.
            </p>
            <h3>INSTALLATION</h3>
            <p>Fully-adhered application is required..</p>
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
            <h3>WARRANTY</h3>

            <p>
              <Link
                to="https://www.mulehide.com/productcategory/roofing-products/modular-roofing-systems/modular-epdm-systems/warranty-information"
                style={{ textDecoration: "none", color: "#7fb180" }}>
                Warranty available from Mulehide.
              </Link>
            </p>

            <h3>MAINTENANCE</h3>
            <p>
              When installed correctly, the EPDM Membrane requires minimal
              maintenance. We recommend designating an onsite representative and
              schedule to inspect the roof system as a whole for damage, plugged
              drains, weathered sealants if used, etc. during the changing of
              the seasons a minimum of twice per year or after any significant
              storms. As with any roof system, normal maintenance should be
              scheduled.
            </p>

            <h3>AVAILABILITY</h3>
            <p>
              Sizes beyond stated modular widths, are available. Contact
              RoofingSeries for availability and ETA.
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

export default WhiteBack;
