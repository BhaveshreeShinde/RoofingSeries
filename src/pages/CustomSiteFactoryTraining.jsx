import { Box, Container } from "@mui/system";
import LandingPageSmall from "../components/LandingPageSmall";
import { Grid } from "@mui/material";
import "../assets/css/header.css";
import RoofSeriesAdvantage from "../components/RoofSeriesAdvantage";
import support2 from "../assets/images/support2.jpg";

const CustomSiteFactoryTraining = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall landingImg={support2} heading="CUSTOM SITE TRAINING" />
      <RoofSeriesAdvantage />

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={7}>
          <h2>CUSTOM SITE TRAINING</h2>
          <p>
            The supply of our product offering is just the beginning. We
            understand the need for quality assurance and continuous improvement
            when it comes to the products we supply. That is why we offer
            product knowledge and application trainings at the following levels:
          </p>
          <h2>CLASSROOM</h2>
          <p>
            Our location or yours, we are able to meet with anyone requesting
            the need for information on various topics. The classroom
            environment allows us to provide product information sessions,
            theoretical installations, product sample offerings, Q&A
            discussions, specific need detail reviews and review of other
            beneficial information.
          </p>
          <h2>FACTORY</h2>
          <p>
            Whether it be monthly, quarterly or yearly, we can help! Allow us to
            work with your most valuable asset, your employees! This will not
            only allow for a hands on experience it will also reinforce best
            known methods, tips and tricks on how to achieve specific and
            relevant details and make everyone comfortable with a working
            knowledge of the proper tools. Upon completion your workers will be
            armed with the knowledge of a proper installation method, and be
            empowered to tackle the details with a higher level of confidence.
          </p>
          <h2>SITE</h2>

          <p>
            We recognize you will have your own site support services or a
            contracted site support company for the roofing tie ins amongst
            other onsite roofing requirements. We will meet your designated team
            at site and review the properties of the roof systems in place;
            provide relevant product and working tool knowledge; discuss detail
            application strategy and deliver one on one training to achieve full
            water tightness. This service can see us involved for 1 day or
            several days in tandem with your team.
          </p>
        </Grid>
        <Grid item xs={12} md={5}>
          <h3>
            WE CAN SUPPORT THE INSTALLATION PROCESS BY PROVIDING TRAINING FROM
            THE CLASSROOM TO FACTORY TO SITE. WHEREVER YOU NEED US, WE CAN BE
            THERE.
          </h3>
          <Box sx={{ display: "flex", margin: "30px" }} gap={2}>
            <div className="try">1</div>
            <div>
              <strong>Is it product knowledge that is required?</strong>
            </div>
          </Box>
          <Box sx={{ display: "flex", margin: "30px" }} gap={2}>
            <div className="try">2</div>
            <div>
              <strong>
                Do in-factory trainings need to happen two, three, four times
                per year?
              </strong>
            </div>
          </Box>
          <Box sx={{ display: "flex", margin: "30px" }} gap={2}>
            <div className="try">3</div>
            <div>
              <strong>
                If your company employs on-site staff capable of finishing the
                roof system, we can help.
              </strong>
            </div>
          </Box>

          <h3>
            TO HELP CREATE A CONSISTENT MESSAGE AT ALL LEVELS OF PRODUCTION THAT
            WILL HELP ENSURE A SUCCESSFUL, WATERTIGHT ROOF INSTALLATION:
          </h3>

          <button className="lastbutton">
            <a href="/contact" rel="media-gallery">
              Contact Us Today
            </a>
          </button>
          <button className="lastbutton">
            <a href="/support/site-support-installation" rel="media-gallery">
              NEXT – Installation
            </a>
          </button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomSiteFactoryTraining;
