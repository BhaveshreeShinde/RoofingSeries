import { Box, Container } from "@mui/system";
import LandingPage from "../components/LandingPage";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/css/installation.css";
import roofingsystem from "../assets/images/roofing-system.jpg";
const RoofingSystem = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <LandingPage
          heading="MAINTAINING YOUR VINYL ROOFING SYSTEM"
          landingImg={roofingsystem}
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
                  Modular roofing systems are designed to last, and with proper
                  maintenance can offer a sturdy long-term walkable roofing
                  solution. To help buyers of our
                  <a href="/products"> flat roof solutions </a>to extend the
                  life of their PVC roof, we’ve put together some easy to follow
                  maintenance tips here:
                </p>
                <h3>INSPECTING YOUR PVC ROOF</h3>
                <p>
                  To ensure your vinyl roofing is performing at its peak, we
                  recommend inspecting your roof membrane twice a year (every 6
                  months). Some of the key issues to watch for in your flat
                  roofing include, delamination, tears, cracks or puncture in
                  your roof membrane, loose screws or premature degrading of
                  your vinyl roofing, and debris blocking the drainage of your
                  PVC roof. If you notice any of these issues, it is likely time
                  for maintenance to preserve the performance of your walkable
                  roof.
                </p>
                <h3>CLEANING YOUR MEMBRANE ROOF</h3>
                <p>
                  Keeping your membrane roof looking clean and new is easy. To
                  spot clean dirty or contaminated areas on your PVC roof, use a
                  clean cotton rag along with mild detergent and water to wipe
                  the area. Certain materials such as those that are tar-based
                  are particularly harmful to PVC flat roofing materials, and
                  spills should be avoided whenever possible. If any tar-based
                  material does come in to contact with your roof membrane, you
                  should try to clean the effected area promptly.
                </p>
                <h3>SNOW REMOVAL FOR FLAT ROOFING SYSTEMS</h3>
                <p>
                  Although snow removal is not fully necessary for our flat roof
                  systems, it is possible. A circumstance in which you may want
                  to consider snow removal would be when a large accumulation of
                  snow causes excess weight and strain on your walkable roof.
                  When removing snow from a membrane roof, use only tools with a
                  rubber edge to prevent damage to your{" "}
                  <a href="/products">vinyl roofing.</a> As PVC roofing
                  membranes are slippery, caution should be exercised to prevent
                  falls or injuries. Caution should also be heeded to avoid
                  puncturing, cutting or otherwise damaging your PVC membrane.
                </p>
                <p>
                  By following these simple
                  <a href="/support/maintenance-warranty">
                    {" "}
                    maintenance tips
                  </a>{" "}
                  , you will preserve the high performance of your PVC flat
                  roofing for a long time to come.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <h2> INSPECTING YOUR PVC ROOF</h2>
                <h2>CLEANING YOUR MEMBRANE ROOF</h2>
                <h2>SNOW REMOVAL FOR FLAT ROOFING SYSTEMS</h2>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RoofingSystem;
