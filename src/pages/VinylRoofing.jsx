import { Box, Container } from "@mui/system";
import LandingPage from "../components/LandingPage";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/css/installation.css";
import vinylroofing from "../assets/images/vinyl-roofing.jpg";
const VinylRoofing = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <LandingPage
          heading="THE BENEFITS OF VINYL ROOFING"
          landingImg={vinylroofing}
        />
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            display: "flex",
            marginTop: "5%",
          }}>
          <Grid item xs={12} md={11}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12} md={7}>
                <p>
                  A problem for many residential buildings is that many flat
                  roofing options begin to fail after only five to seven years
                  of use. No one wants to constantly deal with the frustration
                  of roofing repairs and replacement, and this is where{" "}
                  <a href="/products"> PVC roof systems </a>offer a great
                  solution.
                </p>
                <h3>PVC FLAT ROOFING MATERIALS ARE HIGHLY DURABLE</h3>
                <p>
                  No matter what climate you’re in, a PVC membrane roof is
                  highly durable, and built to offer decades of service in all
                  weather conditions.{" "}
                  <a href="/products/pvc-membranes/accessories/heat-welder">
                    Heat welded{" "}
                  </a>
                  PVC material is a great way to waterproof your roof. This
                  vinyl roofing material is also highly fire resistant, getting
                  you as close as possible to the security of a fully fireproof
                  roof.
                </p>
                <h3>VINYL ROOFING IS LOW MAINTENANCE</h3>
                <p>
                  Throughout their long lifespan, PVC flat roof solutions
                  require minimal maintenance to perform. Typically the only
                  maintenance these{" "}
                  <a href="/products/pvc-membranes/membranes/dectec-reverse-r15000">
                    {" "}
                    walkable roof systems{" "}
                  </a>
                  will need will be unclogging drains and cleaning up dirt and
                  debris. If a problem does arise with your membrane roof,
                  repairs are easy with the ability to heat weld any modular
                  roofing panels that are causing problems.
                </p>
                <h3>PVC IS A GREAT WAY TO WATERPROOF YOUR ROOF</h3>
                <p>
                  A large problem for many building owners with low slope or
                  flat roofing is leaking at the seams. With PVC flat roof
                  solutions however, you can have a walkable roof that is
                  entirely water tight to protect your flat roof material from
                  leaks. PVC modular roofing panels are heat welded together to
                  ensure a watertight seal, no matter how wet the outside
                  conditions become.
                </p>
                <p>
                  If you’re looking for long term and low maintenance flat roof
                  solutions,{" "}
                  <a href="/products/pvc-membranes/membranes/dectec-r12000">
                    PVC membrane roof
                  </a>{" "}
                  is a great option to consider.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <h2> PVC FLAT ROOFING MATERIALS ARE HIGHLY DURABLE</h2>
                <h2>VINYL ROOFING IS LOW MAINTENANCE</h2>
                <h2>PVC IS A GREAT WAY TO WATERPROOF YOUR ROOF</h2>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default VinylRoofing;
