import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import "./header.css";
import { Box, Button } from "@mui/material";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const location = useLocation();
  const [oldPathname, setOldPathname] = useState("");
  if (menuToggle) {
    let d = document.getElementById("main-menu");
    d.style.display = "unset";
  }
  useEffect(() => {
    if (oldPathname !== location.pathname && menuToggle) {
      setOldPathname(location.pathname);
      setMenuToggle(false);
      let d = document.getElementById("main-menu");
      d.style.display = "none";
    }
  }, [location, oldPathname]);

  function closeMenuFunction() {
    let d = document.getElementById("main-menu");
    d.style.display = "none";
  }

  return (
    <div style={{ marginBottom: "50px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}>
        <img
          onClick={navigateToHome}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHITvnVYhV7SHrXSLIR93QZ7AEF2G4bHBo5hoxHXq0kA&s"
          style={{ height: "100px" }}
        />
        <Button>hello</Button>
      </Box>
      <nav>
        {menuToggle ? (
          <div
            className="toggle toggle-btn"
            onClick={() => {
              setMenuToggle(false);
              closeMenuFunction();
            }}>
            <label htmlFor="drop">
              <CloseIcon />
            </label>
          </div>
        ) : (
          <div
            className="toggle toggle-btn"
            onClick={() => {
              setMenuToggle(true);
            }}>
            <label htmlFor="drop">
              <DehazeIcon />
            </label>
          </div>
        )}
        <input type="checkbox" id="drop" />

        <ul id="main-menu" className="menu">
          <li>
            <NavLink htmlFor="drop-1" className="toggle" to="/products">
              products
            </NavLink>
            <NavLink className="main-menu" to="/products">
              products
            </NavLink>
          </li>
          <li>
            <NavLink htmlFor="drop-2" className="toggle" to="/installation">
              installation
            </NavLink>
            <NavLink className="main-menu" to="/installation">
              installation
            </NavLink>
          </li>

          <li>
            <label htmlFor="drop-3" className="toggle">
              <span>
                {" "}
                <NavLink to="/support">The RoofingSeries Advantage</NavLink>
              </span>
            </label>
            <NavLink
              className="main-menu menu-icon is-hidden-mobile"
              to="/support">
              The RoofingSeries Advantage
            </NavLink>
            <input type="checkbox" id="drop-3" />
            <ul className="menu">
              <li>
                <NavLink to="/support/front-end-design-support">
                  Front-End Design Support
                </NavLink>
              </li>
              <li>
                <NavLink to="/support/custom-site-factory-training">
                  Custom Site Training
                </NavLink>
              </li>
              <li>
                <NavLink to="/support/site-support-installation">
                  Site Support & Installation
                </NavLink>
              </li>
              <li>
                <NavLink to="/support/maintenance-warranty">
                  Maintenance & Warranty
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink htmlFor="drop-5" className="toggle" to="/contact">
              CONTACT
            </NavLink>
            <NavLink className="main-menu" to="/contact">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
