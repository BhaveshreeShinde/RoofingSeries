import { Box, Container } from "@mui/system";
import LandingPageSmall from "../components/LandingPageSmall";
import { Grid } from "@mui/material";
import "../assets/css/header.css";
import RoofSeriesAdvantage from "../components/RoofSeriesAdvantage";
import support1 from "../assets/images/support1.jpg";

const FrontEndDesignSupport = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall
        landingImg={support1}
        heading="FRONT-END DESIGN SUPPORT"
      />
      <RoofSeriesAdvantage />

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={7}>
          <h2>FRONT END DESIGN SUPPORT</h2>
          <p>
            Our Consulting Service was born from your requests to provide
            improved control over the final assembly of the roofing application
            at site. Additionally, this service provides increased efficiencies
            to the roof completion to ensure on-time build schedule and greater
            control of unnecessary material and labor costs.
          </p>
          <h2>HOW DO WE ACCOMPLISH THIS TOGETHER?</h2>
          <p>
            First, our technical staff will work directly with your engineers to
            develop each detail of the roofing assembly. By working together
            this will provide continuity to your finished product, promote
            greater watertight integrity and provide enhance cost control.
          </p>
          <p>
            Our sales and technical staff will jointly review your roofing
            plans, and provide you with an accurate quote prior to your bid
            submittal for each project. This identifies all associated costs
            throughout the roofing assembly, from the manufacturing of
            individual units to the final assembly on-site.
          </p>
          <p>
            We use a combination of “your” RoofingSeries trained employees and
            our on-site Consultants. As you will learn, this partnership
            provides significant cost savings. You are in control of the labor
            cost and RoofingSeries has identified your material cost “up front”!
          </p>
          <p>
            The RoofingSeries Consultant is responsible for a comprehensive
            review of the entire roof area and determining the scope of work, as
            well as developing an action plan for its execution. In essence, the
            RoofingSeries Consultant will act on your behalf in the capacity of
            “Roofing Superintendant”.
          </p>
          <p>
            The RoofingSeries Consultant will complete a final review of all
            work completed, develop a discrepancy list and manage the
            corrections to completion.
          </p>
          <p>
            We strongly believe that this is one more way in which our
            <b> partnership</b> develops cost effective changes that provide
            significantly greater products and services for your customer, while
            limiting<b> your</b> exposure to costly post construction
            corrections.
          </p>
        </Grid>
        <Grid item xs={12} md={5}>
          <h3>GET YOUR PROJECT STARTED BY COVERING OFF THE DETAILS FIRST.</h3>
          <Box sx={{ display: "flex", margin: "30px" }} gap={2}>
            <div className="try">1</div>
            <div>
              <strong>What type of modular building is to be built?</strong>
            </div>
          </Box>
          <Box sx={{ display: "flex", margin: "30px" }} gap={2}>
            <div className="try">2</div>
            <div>
              <strong>
                What roof systems are available and what is best suited for the
                build?
              </strong>
            </div>
          </Box>
          <Box sx={{ display: "flex", margin: "30px" }} gap={2}>
            <div className="try">3</div>
            <div>
              <strong>What details need to be considered on the roof?</strong>
            </div>
          </Box>
          <Box sx={{ display: "flex", margin: "30px" }} gap={2}>
            <div className="try">4</div>
            <div>
              <strong>
                How are each of the details addressed to be watertight?
              </strong>
            </div>
          </Box>
          <h3>
            TO HAVE US HELP YOU ANSWER THESE AND MANY OTHER PLENARY QUESTIONS
            BEFORE THE BUILD CYCLE BEGINS:
          </h3>

          <button className="lastbutton">
            <a href="/contact" rel="media-gallery">
              Contact Skyline
            </a>
          </button>
          <button className="lastbutton">
            <a href="/support/custom-site-factory-training" rel="media-gallery">
              NEXT – TRAINING
            </a>
          </button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FrontEndDesignSupport;
