import { Typography } from "@mui/material";
import RoofSeriesAdvantage from "../components/RoofSeriesAdvantage";
import SimpleSlider from "../components/Carousel";
import "../assets/css/Home.css";

const Home = () => {
  return (
    <div className="container">
      <SimpleSlider />
      <div className="mid-section-content">
        <Typography className="mid-section-text">
          Skyline Building Systems Inc. has been covering Canada and the United
          States Modular Roofing needs since 1976 with RoofingSeries EPDM and
          PVC solutions. With 38 years of history as a well-established
          business, we've been the trusted distributor of reliable, high-quality
          PVC and EPDM roofing system solutions to countless customers in North
          America.
        </Typography>

        <Typography className="mid-section-text">
          The advantage of choosing RoofingSeries PVC and EPDM modular roofing
          solutions is crystal clear. All white membranes are Cool Roof Rated,
          water tight, custom cut and welded to exact specifications enabling
          just-in-time manufacturing and delivery. RoofingSeries customers enjoy
          peace of mind with over 30 years of proven experience plus a full line
          of system specific accessories. RoofingSeries PVC modular membranes
          are the only product on the market to utilize spreadcoat technology,
          eliminating the risk of delamination and are backed by top warranties
          in the industry.
        </Typography>
      </div>

      <RoofSeriesAdvantage />
    </div>
  );
};

export default Home;
