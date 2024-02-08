import React, { useState } from "react";
import { Container, Tabs, Tab, Box, Grid } from "@mui/material";
import "../../assets/css/product.css";
import product1 from "../../assets/images/product-1.jpg";
import product2 from "../../assets/images/product-2.jpg";
import product3 from "../../assets/images/product-3.jpg";
import product4 from "../../assets/images/product-4.jpg";
import product5 from "../../assets/images/product-5.jpg";
import product6 from "../../assets/images/product-6.jpg";
import product7 from "../../assets/images/product-7.jpg";
import product8 from "../../assets/images/product-8.jpg";
import product9 from "../../assets/images/product-9.jpg";
import PvcMembranesimg from "../../assets/images/pvc-mem.jpg";
import { Link } from "react-router-dom";
import LandingPageSmall from "../../components/LandingPageSmall";
const PvcMembranes = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall landingImg={PvcMembranesimg} />
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={11}>
          <h1>PVC MODULAR ROOFING SOLUTIONS</h1>
          <p>
            RoofingSeries PVC membranes are supplied exclusively to the modular
            industry in North America by (Firestone?). Definitively, we have
            provided the highest quality PVC roofing membranes available to the
            modular manufacturing over the past 3 decades coupled with over 50
            years of proven success with the membrane.
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
            unmatched. It is a heat-weldable membrane produced with an internal
            fiberglass mat reinforcement for excellent dimensional stability.
            Once joined, the seam can withstand greater stresses than the sheet
            itself. Various thicknesses and the original fully walkable version,
            all provide incredible performance.
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
            RoofingSeries compatible silicone caulking for sealing around metal
            flanges, pipe clamps to be used around ABS pipe protrusions, and
            butyl tape used under flanges and around perimeter terminations.
            Also an aluminum termination bar is used to securely fasten the
            membrane at the roof edge.
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default PvcMembranes;
