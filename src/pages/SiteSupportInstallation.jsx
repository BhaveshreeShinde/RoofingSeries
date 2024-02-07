import { Box, Container } from "@mui/system";
import LandingPageSmall from "../components/LandingPageSmall";
import { Grid } from "@mui/material";
import "../assets/css/header.css";
import RoofSeriesAdvantage from "../components/RoofSeriesAdvantage";
import support3 from "../assets/images/support3.jpg";

const SiteSupportInstallation = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall
        landingImg={support3}
        heading="SITE SUPPORT & INSTALLATION"
      />

      <RoofSeriesAdvantage />

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={7}>
          <h2>SITE SUPPORT & INSTALLATIONS</h2>
          <p>
            RoofingSeries supports installations and can answer any questions
            concerning membranes or the installation process. We have a growing
            network of qualified roofing contractors able to assist us all in
            getting what you need, peace of mind when it comes to the water
            tightness of your roofing system. From double wides to multiple
            units to every roof system, our network of installers come to you
            with industry specific knowledge and proven experience in the
            installation of the various roof membrane types. Call us today to
            help support your roofing tie ins.
          </p>
        </Grid>
        <Grid item xs={12} md={5}>
          <h3>
            PROVIDING THE PEACE OF MIND THAT WHAT WAS DONE IN PLANT IS NOT BEING
            COMPROMISED. RATHER IT IS BEING COMPLETED, PROPERLY.
          </h3>
          <Box sx={{ display: "flex", margin: "30px" }} gap={2}>
            <div className="try">1</div>
            <div>
              <strong>
                Consider the location the modular units are to be site
                assembled.
              </strong>
            </div>
          </Box>
          <Box sx={{ display: "flex", margin: "30px" }} gap={2}>
            <div className="try">2</div>
            <div>
              <strong>
                Consider if you need to hire a roofing contractor to finish what
                began at factory.
              </strong>
            </div>
          </Box>
          <Box sx={{ display: "flex", margin: "30px" }} gap={2}>
            <div className="try">3</div>
            <div>
              <strong>
                Consider what timeline you need to have the roof tied in by.
              </strong>
            </div>
          </Box>

          <h3>
            TO HAVE US HELP PROVIDE RELIABLE, KNOWLEDGEABLE AND PROVEN
            CONTRACTOR SUPPORT:
          </h3>

          <button className="lastbutton">
            <a href="/contact" rel="media-gallery">
              Contact Us Today
            </a>
          </button>
          <button className="lastbutton">
            <a href="/support/maintenance-warranty" rel="media-gallery">
              NEXT – TRAINING
            </a>
          </button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SiteSupportInstallation;
