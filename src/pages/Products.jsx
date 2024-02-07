import React, { useState } from "react";
import { Container, Tabs, Tab, Box, Grid } from "@mui/material";
import "../assets/css/product.css";
import product1 from "../assets/images/product-1.jpg";
import product2 from "../assets/images/product-2.jpg";
import product3 from "../assets/images/product-3.jpg";
import product4 from "../assets/images/product-4.jpg";
import product5 from "../assets/images/product-5.jpg";
import product6 from "../assets/images/product-6.jpg";
import product7 from "../assets/images/product-7.jpg";
import product8 from "../assets/images/product-8.jpg";
import product9 from "../assets/images/product-9.jpg";
import product10 from "../assets/images/product-10.jpg";
import { Link } from "react-router-dom";
const Products = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
        }}
        gap={1}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#ffc600",
            },
          }}>
          <Tab
            label="PVC Membranes"
            sx={{
              "&.Mui-selected": {
                backgroundColor: "#ffc600",
                color: "#5a677",
              },
              "&:not(.Mui-selected)": {
                backgroundColor: "#3e3a35",
                color: "#fff",
              },
            }}
          />
          <Tab
            label="EPPM Membranes"
            sx={{
              "&.Mui-selected": {
                backgroundColor: "#ffc600",
                color: "#5a677",
              },
              "&:not(.Mui-selected)": {
                backgroundColor: "#3e3a35",
                color: "#fff",
              },
            }}
          />
        </Tabs>
      </Box>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={11}>
          <TabPanel value={value} index={0}>
            <h2>PVC MODULAR ROOFING SOLUTIONS</h2>
            <p>
              RoofingSeries PVC membranes are supplied exclusively to the
              modular industry in North America by (Firestone?). Definitively,
              we have provided the highest quality PVC roofing membranes
              available to the modular manufacturing over the past 3 decades
              coupled with over 50 years of proven success with the membrane.
            </p>
            <p>
              RoofingSeries PVC systems are specifically engineered to meet the
              needs of modular manufacturers. The membranes are available in
              custom widths and lengths. Membranes and complimentary accessories
              are lightweight and easy to install.
            </p>
            <p>
              RoofingSeries PVC membranes meet or exceed the requirements of
              CAN/CGSB 37.54-M 1995 and ASTM 4434-04. Roofing Series membrane,
              fully adhered with WBA 200 adhesive and meets the requirements of
              CAN/ULC-S107-M87 (UL 790) Class C on a combustible roof deck of
              minimum 5/8” T&G plywood with a maximum slope of 1:96.
            </p>
            <h2>ROOFINGSERIES PVC SYSTEM BENEFITS:</h2>
            <ul>
              <li>
                Class ‘C’ Fire Rating fully adhered directly over min. 5/8" T&G
                CDX Plywood
              </li>
              <li>Unique Fully Walkable 60mil option available</li>
              <li>Completely customizable roof sizes</li>
              <li>35 years of proven performance to the modular industry</li>
              <li>Smooth backed; internally reinforced</li>
              <li>
                Manufactured via spread coating process, creating a truly
                monolithic sheet
              </li>
              <li>
                Thickness Options: 48mils (10year), 60mils (15year), 80mils (20
                year)
              </li>
              <li>
                Full line of existing accessories and option for customizable
                accessories
              </li>
              <li>Cool Roof Rated; Energy Star Rated</li>
            </ul>
            <h2>ROOFINGSERIES PVC MEMBRANES</h2>
            <p>
              RoofingSeries PVC Membranes have been designed to fit the needs of
              the modular industry in regards to flat roofing system solutions.
              Born from a proven formula of the highest quality polymers and
              packed with the most plasticizers, this product’s integrity is
              unmatched. It is a heat-weldable membrane produced with an
              internal fiberglass mat reinforcement for excellent dimensional
              stability. Once joined, the seam can withstand greater stresses
              than the sheet itself. Various thicknesses and the original fully
              walkable version, all provide incredible performance.
            </p>
            <Box className="container">
              <div className="imageContainer">
                <img src={product1} className="image" alt="Image 1" />
                <Link
                  to="/products/pvc-membranes/membranes/dectec-r12000"
                  className="centeredText-img">
                  R12000 / R15000 / R20000
                </Link>
              </div>

              <div className="imageContainer">
                <img src={product2} className="image" alt="Image 2" />
                <Link
                  to="/products/pvc-membranes/membranes/dectec-reverse-r15000"
                  className="centeredText-img">
                  Fully Walkable R15000
                </Link>
              </div>
            </Box>
            <h2>ADHESIVES & SEALANTS</h2>
            <Box className="container-img">
              <img
                src={product3}
                className="centeredImage-img"
                alt="Centered Image"
              />
              <Link
                to="/products/pvc-membranes/adhesives-sealants/wba-200"
                className="centeredText-img">
                PVC WBA 200
              </Link>
            </Box>
            <h2>ACCESSORIES</h2>
            <p>
              To finish certain details and ensure water tightness, some
              accessories are required. These include but are not limited to
              RoofingSeries compatible silicone caulking for sealing around
              metal flanges, pipe clamps to be used around ABS pipe protrusions,
              and butyl tape used under flanges and around perimeter
              terminations. Also an aluminum termination bar is used to securely
              fasten the membrane at the roof edge.
            </p>
            <Box className="container">
              <div className="imageContainer">
                <img src={product4} className="image" />
                <Link
                  to="/products/pvc-membranes/accessories/dectec-r12000-pvc-boot-1-6-opening-conical"
                  className="centeredText-img">
                  RoofingSeries Pipeboots
                </Link>
              </div>
              <div className="imageContainer">
                <img src={product5} className="image" />
                <Link
                  to="/products/pvc-membranes/accessories/termination-bar"
                  className="centeredText-img">
                  Termination Bar
                </Link>
              </div>
              <div className="imageContainer">
                <img src={product6} className="image" />
                <Link
                  to="/products/pvc-membranes/accessories/descupper"
                  className="centeredText-img">
                  Dec-Scupper
                </Link>
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}>
              <div className="imageContainer">
                <img src={product7} className="image" />
                <Link
                  to="/products/pvc-membranes/accessories/deccorner-outside"
                  className="centeredText-img">
                  Dec-Corner – Outside
                </Link>
              </div>
              <div className="imageContainer">
                <img src={product8} className="image" />
                <Link
                  to="/products/pvc-membranes/accessories/deccorner-inside"
                  className="centeredText-img">
                  Dec-Corner – Inside
                </Link>
              </div>
              <div className="imageContainer">
                <img src={product9} className="image" />
                <Link
                  to="/products/pvc-membranes/accessories/heat-welder"
                  className="centeredText-img">
                  Heat Welder
                </Link>
              </div>
            </Box>
          </TabPanel>
          {/* tab 2 */}
          <TabPanel value={value} index={1}>
            <h2>EPDM MODULAR ROOFING SOLUTIONS</h2>
            <p>
              EPDM (Ethylene Propylene Diene Monomer) modular roofing systems
              install quickly and economically. UL and FM listed assemblies are
              available upon request. Non-penetrating mate-line and bridging
              system keeps dealer multi-unit lease-fleets fit. EPDM membranes
              are fully adhered with Water Based Bonding Adhesive, a must for
              in-plant installation. Its single-side, wet application requires
              fewer workers and offers easier sheet positioning.
            </p>
            <p>
              All the accessories you need to complete roof details around edges
              and penetrations are also stocked locally for delivery along with
              your EPDM. EPDM is lightweight, making it ideal for new
              construction and retrofit installations without adding excessive
              weight to the roof deck. EPDM helps reduce the noise made by rain
              and hail or wind as compared to other roof systems such as metal
              roofs causing vibration. EPDM stretches to 425% so structural
              movement has no effect on integrity. It provides excellent
              resistance to ozone and UV and can handle the coldest winters or
              the desert heat.
            </p>
            <p>
              Meets or exceeds ASTM standards.EPDM membranes from RoofingSeries.
            </p>
            <h2>EPDM SYSTEM BENEFITS:</h2>
            <ul>
              <li>Easy to install and Retrofit</li>
              <li>Fast Roofs</li>
              <li>
                High tensile strength, single-ply membrane ideal for long-term
                watertight integrity
              </li>
              <li>
                Quiet Protection eliminates “roof rumble” while it protects
                against leaks
              </li>
              <li>
                Highly flexible in hot and cold temperatures, will not split or
                crack
              </li>
              <li>Long Lifecycle</li>
              <li>Non-reinforced and pliable</li>
              <li>Membrane to membrane utilizes glues, tapes and adhesives</li>
              <li>45 mils thick with a 10 year warranty</li>
            </ul>
            <h2>ROOFINGSERIES EPDM MEMBRANES</h2>
            <p>
              EPDM Modular Roofing Systems utilize a versatile rubber roofing
              membrane that has been used in the low-slope roofing industry for
              over half a century. EPDM membranes install easily, have superior
              weatherability, outstanding aging, extreme flexibility and more.
            </p>
            <Box className="container-img">
              <img src={product10} className="centeredImage-img" />
              <Link
                to="/products/epdm-membranes/membranes/white-black"
                className="centeredText-img">
                White / Black EPDM
              </Link>
            </Box>
            <h2>ADHESIVES & SEALANTS</h2>
            <Box className="container-img">
              <img src={product3} className="centeredImage-img" />
              <Link
                to="/products/epdm-membranes/adhesives-sealants/sbs-epdm-wba"
                className="centeredText-img">
                EPDM WBA
              </Link>
            </Box>
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
};

export default Products;
