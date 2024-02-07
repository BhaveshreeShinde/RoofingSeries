import { Container } from "@mui/system";
import LandingPageSmall from "../../components/LandingPageSmall";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import "../../assets/css/product.css";
import product1 from "../../assets/images/product-1.jpg";

const DectecR12000 = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall
        landingImg={product1}
        heading="R12000 / R15000 / R20000"
      />
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={7}>
            <h1>R12000 (48MIL), R15000 (60MIL), R20000 (80MIL)</h1>
            <h3>OVERVIEW</h3>
            <p>
              The RoofingSeries PVC membrane has been designed to fit the needs
              of the modular industry in regards to flat roofing system
              solutions. Born from a proven formula of the highest quality
              polymers and packed with the most plasticizers, this product’s
              integrity is unmatched. It is a heat-weldable membrane produced
              with an internal fiberglass mat reinforcement for excellent
              dimensional stability. Once thermally welded, the seam can
              withstand greater stresses than the sheet itself. Various
              thicknesses and the original fully walkable version, all provide
              incredible performance.
            </p>
            <h3>COMPOSITION</h3>
            <p>
              The RoofingSeries Membrane is a high quality, thermoplastic PVC
              membrane with fiberglass reinforcement. This is the only membrane
              that achieves a Class ‘C’ Fire Rating when fully adhered directly
              to plywood. In addition, the membrane has a unique lacquer coating
              applied to the top of the membrane to reduce dirt pick up. Color
              availability is white.
            </p>
            <h3>BENEFITS:</h3>
            <li>
              {" "}
              Class ‘C’ Fire Rating fully adhered directly over min. 5/8” T&G
              CDX Plywood
            </li>
            <li> Unique Fully Walkable 60mil option available</li>
            <li> Completely customizable roof sizes</li>
            <li>
              {" "}
              A modular roofing option offered to market for the past 35 years
            </li>
            <li> Smooth backed; internally reinforced</li>
            <li> Manufactured via spread coating process</li>
            <li> Thickness Options: 48mils, 60mils, and 80mils</li>
            <li>
              {" "}
              Full line of existing accessories and option for customizable
              accessories
            </li>
            <li> Cool Roof Rated; Energy Star Rated</li>
            <li>
              {" "}
              Will not propagate flame. Self extinguishing characteristics
            </li>
            <li>
              {" "}
              15 year material warranty while providing a non slip surface for
              roof top traffic
            </li>
            <li> Accomodates virtually any modular unit dimensions</li>
            <li> Established and proven</li>
            <li>
              {" "}
              Excellent dimensional stability. Full adherence of the membrane to
              substrate
            </li>
            <li>
              {" "}
              Will not delaminated in the face of bending, torqueing, or
              temperature swings
            </li>
            <li> 10, 15, and 20 year material warranties</li>
            <li> A unique and 100% complete system</li>
            <li> Helps reduce cooling costsv</li>
            <h3>CODES AND APPROVALS</h3>
            <p>
              RoofingSeries PVC Membranes are classified by Underwriters
              Laboratories, Inc., Underwriters Laboratories of Canada, FM
              Global, Miami-Dade and Florida Building Code. Roofing Series
              Membranes also meet the material requirements of the International
              Building Code.
            </p>
            <h3>PACKAGING</h3>
            <p>
              The RoofingSeries PVC Membrane is custom made to order in width
              and length from master rolls that are 10’x1500’. After creating
              the required roof size, the roof is put on a sturdy core, rolled
              up, bagged and tagged and palletized for shipment.
            </p>
            <h3>INSTALLATION</h3>
            <p>
              After a proper substrate preparation, the RoofingSeries membrane
              is unrolled into the WBA 200 adhesive and then pressed into place
              to promote a healthy bond of membrane to adhesive to substrate.
              Any and membrane to membrane junctions are to be done so via
              thermally heat welding.
            </p>
            <p>
              For full details, please refer to the{" "}
              <Link
                to="/installation"
                style={{ textDecoration: "none", color: "#7fb180" }}>
                RoofingSeries Installation Guide.
              </Link>
            </p>
            <h3>WARRANTY</h3>
            <li>R12000 - 48mils thick - 10 year material warranty</li>
            <li>R15000 - 60mils thick - 15 year material warranty</li>
            <li>R20000 - 80mils thick - 20 year material warranty</li>
            <p>
              For full details, please refer to the appropriate{" "}
              <Link
                to="/support/maintenance-warranty"
                style={{ textDecoration: "none", color: "#7fb180" }}>
                Warranty information sheets.
              </Link>
            </p>

            <h3>MAINTENANCE</h3>
            <p>
              When installed correctly, the RoofingSeries PVC Membrane requires
              minimal maintenance.We recommend designating an onsite
              representative and schedule to inspect the roof system as a whole
              for damage, plugged drains, weathered sealants if used, etc.
              during the changing of the seasons a minimum of twice per year or
              after any significant storms. As with any roof system, normal
              maintenance should be scheduled.
            </p>
            <p>
              For full details, please refer to the{" "}
              <Link
                to="/installation"
                style={{ textDecoration: "none", color: "#7fb180" }}>
                RoofingSeries / Modular Maintenance recommendations.
              </Link>
            </p>
            <h3>AVAILABILITY</h3>
            <p>Membranes sold exclusively through Skyline Building Systems.</p>
          </Grid>
          <Grid item xs={12} md={5}>
            <button className="homebutton">
              <a
                href="http://roofing-series.com/site/templates/repository/DecTec-R-Physical-Properties.pdf"
                target="_blank"
                rel="media-gallery">
                Download Technical Information Sheet
              </a>
            </button>
            <button className="homebutton">
              <a
                href="http://roofing-series.com/site/templates/repository/sds/Roofing%20Series%20Membrane%20SDS.pdf"
                target="_blank"
                rel="media-gallery">
                Download Safety Data Sheet
              </a>
            </button>
            <button className="homebutton">
              <a
                href="products/pvc-membranes/membranes/dectec-reverse-r15000"
                rel="media-gallery">
                Fully Walkable Membrane Info
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

export default DectecR12000;
