import { Box, Container } from "@mui/system";
import LandingPage from "../components/LandingPage";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/css/installation.css";
import rrseries from "../assets/images/rrseries-diff.jpg";
const RoofingMembranes = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <LandingPage
          heading="WHAT ARE PVC ROOFING MEMBRANES?"
          landingImg={rrseries}
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
                  Before making an investment in your new{" "}
                  <a href="/products/pvc-membranes/membranes/dectec-reverse-r15000">
                    {" "}
                    walkable roofing system
                  </a>
                  , it is good to know what you’re buying, and what the benefits
                  are. To make your buying decision easier we’ve put together
                  some basic information on PVC roofing to help you understand
                  what this roof membrane is and what it can do for you.
                </p>
                <h3>WHAT IS PVC AND WHY USE IT IN A ROOFING DESIGN?</h3>
                <p>
                  PVC is a type of plastic well known for its affordability
                  along with its durability. Because of its benefits, PVC is one
                  of the most frequently used types of plastic around. PVC
                  material is able to be processed into a variety of products
                  with unique performance characteristics, one of these products
                  being modular roofing systems. PVC offers a great material to
                  use in modular roofing in large part because of its
                  durability. Even in harsh conditions and climates, this{" "}
                  <a href="/products/pvc-membranes/membranes/dectec-r12000">
                    reliable roof membrane{" "}
                  </a>
                  will hold strong.
                </p>
                <h3>WHAT IS A PVC ROOF?</h3>
                <p>
                  <a href="/products">PVC roofing </a>is made from two layers of
                  PVC roof material with polyester added in between the layers
                  to act as a reinforcement. The layers in a PVC roof include
                  additives to make the material flexible, UV stable, and to
                  prevent curing. By adding a layer of acrylic coating to roof
                  membrane, a PVC roof is made reflective and repellent to dust
                  and dirt.
                </p>
                <h3>WHAT ARE THE BENEFITS OF VINYL ROOFING?</h3>
                <p>
                  Through the unique{" "}
                  <a href="/installation"> heat welding installation </a>
                  process of PVC roofing membranes, this walkable roof material
                  is ensured to last a long time. The heat welding process
                  creates a permanent bond between each individual PVC roofing
                  sheet, forming a solid layer spanning your entire walkable
                  roof. The results of this process are a waterproof and
                  fireproof roof that will last for decades after installation
                </p>
                <p>
                  By understanding what PVC flat roof materials are and what
                  their benefits are, potential buyers are able to make a more
                  informed decision about their flat roofing systems.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <h2> WHAT IS PVC AND WHY USE IT IN A ROOFING DESIGN?</h2>
                <h2>WHAT IS A PVC ROOF?</h2>
                <h2>WHAT ARE THE BENEFITS OF VINYL ROOFING?</h2>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RoofingMembranes;
