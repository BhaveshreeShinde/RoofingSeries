import { Container } from "@mui/system";
import LandingPageSmall from "../components/LandingPageSmall";
import RoofSeriesAdvantage from "../components/RoofSeriesAdvantage";
import support from "../assets/images/support.jpg";

const Support = () => {
  return (
    <Container maxWidth="xl">
      <LandingPageSmall
        landingImg={support}
        heading="THE ROOFINGSERIES ADVANTAGE"
      />
      <Container>
        <p style={{ textAlign: "center" }}>
          The advantage of choosing RoofingSeries PVC and EPDM modular roofing
          solutions is crystal clear. All membranes are Cool Roof Rated, water
          tight, custom cut and welded to exact specifications enabling
          just-in-time manufacturing and delivery. RoofingSeries customers enjoy
          peace of mind with over 30 years of proven experience plus a full line
          of system specific accessories. RoofingSeries modular membranes are
          the only product on the market to utilize spreadcoat technology,
          eliminating the risk of delamination and are backed by the top
          warranties in the industry.
        </p>
      </Container>
      <RoofSeriesAdvantage />
    </Container>
  );
};

export default Support;
