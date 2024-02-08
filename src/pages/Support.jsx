import { Container } from "@mui/system";
import LandingPageSmall from "../components/LandingPageSmall";
import RoofSeriesAdvantage from "../components/RoofSeriesAdvantage";
import support from "../assets/images/support.jpg";
import { Box, Grid } from "@mui/material";

const Support = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall
        landingImg={support}
        heading="THE ROOFINGSERIES ADVANTAGE"
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
          <p style={{ textAlign: "center", marginBottom: "5%" }}>
            The advantage of choosing RoofingSeries PVC and EPDM modular roofing
            solutions is crystal clear. All membranes are Cool Roof Rated, water
            tight, custom cut and welded to exact specifications enabling
            just-in-time manufacturing and delivery. RoofingSeries customers
            enjoy peace of mind with over 30 years of proven experience plus a
            full line of system specific accessories. RoofingSeries modular
            membranes are the only product on the market to utilize spreadcoat
            technology, eliminating the risk of delamination and are backed by
            the top warranties in the industry.
          </p>
        </Grid>
      </Grid>
      <RoofSeriesAdvantage />
    </Container>
  );
};

export default Support;
