import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5%",
        }}>
        <img
          onClick={""}
          src="http://www.roofing-series.com/site/assets/files/1/roofingseries-1.png"
          style={{ height: "50px" }}
        />
        <Box>
          <Link to="/sitemap">Sitemap</Link>
          <h5>information</h5>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
