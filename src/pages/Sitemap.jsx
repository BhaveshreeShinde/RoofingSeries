import { Container, Grid } from "@mui/material";
import "../assets/css/sitemap.css";

const Sitemap = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            marginTop: "5%",
          }}>
          <ul>
            <li>
              <a href="/">RoofingSeries</a>
              <ul>
                <li>
                  <a href="/products">Products</a>
                  <ul>
                    <li>
                      <a href="/products/pvc-membranes">PVC Membranes</a>
                    </li>
                    <ul>
                      <li>
                        <a href="/products/pvc-membranes/membranes/">
                          RoofingSeries PVC Membranes
                        </a>
                        <ul>
                          <li>
                            <a href="/products/pvc-membranes/membranes/dectec-r12000">
                              R12000 / R15000 / R20000
                            </a>
                          </li>
                          <li>
                            <a href="/products/pvc-membranes/membranes/dectec-reverse-r15000">
                              Fully Walkable R15000
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/products/pvc-membranes/adhesives-sealants">
                          Adhesives & Sealants
                        </a>
                        <ul>
                          <li>
                            {" "}
                            <a href="/products/pvc-membranes/adhesives-sealants/wba-200">
                              PVC WBA 200
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/products/pvc-membranes/accessories">
                          Accessories
                        </a>
                        <ul>
                          <li>
                            {" "}
                            <a href="/products/pvc-membranes/accessories/dectec-r12000-pvc-boot-1-6-opening-conical">
                              RoofingSeries Pipeboots{" "}
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="/products/pvc-membranes/accessories/termination-bar">
                              Termination Bar{" "}
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="/products/pvc-membranes/accessories/descupper">
                              Dec-Scupper{" "}
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="/products/pvc-membranes/accessories/deccorner-outside">
                              Dec-Corner – Outside{" "}
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="/products/pvc-membranes/accessories/deccorner-inside">
                              Dec-Corner – Inside{" "}
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="/products/pvc-membranes/accessories/heat-welder">
                              Heat Welder{" "}
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </ul>
                  <ul>
                    <li>
                      <a href="/products/epdm-membranes">EPDM Membranes</a>
                    </li>
                    <ul>
                      <li>
                        <a href="/products/epdm-membranes/membranes">
                          RoofingSeries EPDM Membranes
                        </a>
                        <ul>
                          <li>
                            <a href="/products/epdm-membranes/membranes/white-black">
                              White / Black EPDM
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/products/epdm-membranes/adhesives-sealants">
                          ADHESIVES & SEALANTS
                        </a>
                        <ul>
                          <li>
                            {" "}
                            <a href="/products/epdm-membranes/adhesives-sealants/sbs-epdm-wba">
                              EPDM WBA
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/installation">Installation</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/support">The RoofingSeries Advantage</a>
                  <ul>
                    <li>
                      <a href="/support/front-end-design-support">
                        Front-End Design Support
                      </a>
                    </li>
                    <li>
                      <a href="/support/custom-site-factory-training">
                        Custom Site Training
                      </a>
                    </li>
                    <li>
                      <a href="/support/site-support-installation">
                        Site Support & Installation
                      </a>
                    </li>
                    <li>
                      <a href="/support/maintenance-warranty">
                        Maintenance & Warranty
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/maintaining-your-vinyl-roofing-system">
                    Maintaining Your Vinyl Roofing System
                  </a>
                </li>
              </ul>{" "}
              <ul>
                <li>
                  <a href="/what-are-pvc-roofing-membranes">
                    What Are PVC Roofing Membranes?
                  </a>
                </li>
              </ul>{" "}
              <ul>
                <li>
                  <a href="/the-benefits-of-vinyl-roofing">
                    The benefits of Vinyl Roofing
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/what-are-the-benefits-of-heat-welding-flat-roof-materials-together">
                    What Are The Benefits of Heat Welding Flat Roof Materials
                    Together
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Grid>
      </Container>
    </div>
  );
};

export default Sitemap;
