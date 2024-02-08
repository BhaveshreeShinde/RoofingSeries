import { Box, Container } from "@mui/system";
import LandingPage from "../components/LandingPage";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/css/installation.css";
import RoofMaterialsTogetherimg from "../assets/images/dectec-product-welder.jpg";
const RoofMaterialsTogether = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <LandingPage
          heading="WHAT ARE THE BENEFITS OF HEAT WELDING FLAT ROOF MATERIALS TOGETHER?"
          landingImg={RoofMaterialsTogetherimg}
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
                  On its own, <a href="/products">PVC roof material</a> is
                  highly durable and long lasting. Through the process of heat
                  welding, PVC roofing membranes can be connected together to
                  form a completely waterproof and lasting layer to protect your
                  flat roofing.
                </p>
                <h3>
                  ARE THE HEAT WELDED SEAMS OF PVC ROOF SUSCEPTIBLE TO LEAKS?
                </h3>
                <p>
                  There is no reason to worry about leakage in the heat welded
                  seams of your vinyl roofing, as through the heat welding
                  process, these seams become even stronger than the modular
                  roofing panels themselves. By
                  <a href="/products/pvc-membranes/accessories/heat-welder">
                    {" "}
                    heat welding
                  </a>{" "}
                  your PVC roof panels, you can completely waterproof your roof,
                  and will no longer have to worry about leaks, even from
                  pooling water.
                </p>
                <h3>
                  HOW DOES HEAT WELDED VINYL ROOFING COMBAT EXTREME WEATHER
                  CONDITIONS?
                </h3>
                <p>
                  Through the strength of heat welded seams,
                  <a href="/products/pvc-membranes/membranes/dectec-reverse-r15000">
                    {" "}
                    PVC walkable roof material
                  </a>{" "}
                  is extremely durable in all weather conditions. If you are
                  concerned about high winds, heavy rain, or even fire, heat
                  welded membrane roof material is protected against it. Ultra
                  strong PVC roof material is made even stronger through the
                  heat welding process and offers a nearly fireproof roof
                  solution.
                </p>
                <h3>CAN VINYL ROOFING BE REPAIRED THROUGH HEAT WELDING?</h3>
                <p>
                  Given the high durability of
                  <a href="/products/pvc-membranes/membranes/dectec-r12000">
                    {" "}
                    PVC roofing membranes
                  </a>
                  , there is minimal need for repair of these flat roof
                  solutions. If a problem does arise with your membrane roof
                  however, the repair process is easy through heat welding. PVC
                  roof material is extremely flexible and remains weldable
                  throughout its useful life, making heat welding a great and
                  easy option for any areas of concern.
                </p>
                <p>
                  PVC flat roofing materials are already strong and durable on
                  their own, but through the heat welding process, vinyl roofing
                  offers an ideal solution to waterproof your roof.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <h2>
                  {" "}
                  ARE THE HEAT WELDED SEAMS OF PVC ROOF SUSCEPTIBLE TO LEAKS?
                </h2>
                <h2>
                  HOW DOES HEAT WELDED VINYL ROOFING COMBAT EXTREME WEATHER
                  CONDITIONS?
                </h2>
                <h2>CAN VINYL ROOFING BE REPAIRED THROUGH HEAT WELDING?</h2>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RoofMaterialsTogether;
