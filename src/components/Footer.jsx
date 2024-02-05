import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}>
      <img
        onClick={""}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHITvnVYhV7SHrXSLIR93QZ7AEF2G4bHBo5hoxHXq0kA&s"
        style={{ height: "100px" }}
      />
      <Box>
        <span>text</span>
        <h5>information</h5>
      </Box>
    </Box>
  );
};

export default Footer;
