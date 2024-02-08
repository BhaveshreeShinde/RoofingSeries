import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Installation from "./pages/Installation";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import FrontEndDesignSupport from "./pages/FrontEndDesignSupport";
import CustomSiteFactoryTraining from "./pages/CustomSiteFactoryTraining";
import SiteSupportInstallation from "./pages/SiteSupportInstallation";
import MaintenanceWarranty from "./pages/MaintenanceWarranty";
import Products from "./pages/Products";
import DectecR12000 from "./pages/products/DectecR12000";
import WhiteBack from "./pages/products/WhiteBack";
import EpdmWba from "./pages/products/EpdmWba";
import FullyWalkable from "./pages/products/FullyWalkable";
import PvcWba from "./pages/products/PvcWba";
import RoofingSeriesPipeboots from "./pages/products/RoofingSeriesPipeboots";
import TerminationBar from "./pages/products/TerminationBar";
import DecScupper from "./pages/products/DecScupper";
import DeccornerOutside from "./pages/products/DeccornerOutside";
import DeccornerInside from "./pages/products/DeccornerInside";
import HeatWelder from "./pages/products/HeatWelder";
import Sitemap from "./pages/Sitemap";
import RoofingSystem from "./pages/RoofingSystem";
import RoofingMembranes from "./pages/RoofingMembranes";
import VinylRoofing from "./pages/VinylRoofing";
import RoofMaterialsTogether from "./pages/RoofMaterialsTogether";
import PvcMembranes from "./pages/products/PvcMembranes";
import EpdmMembranes from "./pages/products/EpdmMembranes";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route
          path="/maintaining-your-vinyl-roofing-system"
          element={<RoofingSystem />}
        />
        <Route
          path="/what-are-pvc-roofing-membranes"
          element={<RoofingMembranes />}
        />
        <Route
          path="/the-benefits-of-vinyl-roofing"
          element={<VinylRoofing />}
        />
        <Route
          path="/what-are-the-benefits-of-heat-welding-flat-roof-materials-together"
          element={<RoofMaterialsTogether />}
        />
        <Route
          path="/support/front-end-design-support"
          element={<FrontEndDesignSupport />}
        />
        <Route
          path="/support/custom-site-factory-training"
          element={<CustomSiteFactoryTraining />}
        />
        <Route
          path="/support/site-support-installation"
          element={<SiteSupportInstallation />}
        />
        <Route
          path="/support/maintenance-warranty"
          element={<MaintenanceWarranty />}
        />
        <Route
          path="/products/pvc-membranes/membranes/dectec-r12000"
          element={<DectecR12000 />}
        />
        <Route path="/products/pvc-membranes" element={<PvcMembranes />} />
        <Route path="/products/epdm-membranes" element={<EpdmMembranes />} />
        <Route
          path="/products/epdm-membranes/membranes/white-black"
          element={<WhiteBack />}
        />
        <Route
          path="/products/epdm-membranes/adhesives-sealants/sbs-epdm-wba"
          element={<EpdmWba />}
        />
        <Route
          path="/products/pvc-membranes/membranes/dectec-reverse-r15000"
          element={<FullyWalkable />}
        />
        <Route
          path="/products/pvc-membranes/adhesives-sealants/wba-200"
          element={<PvcWba />}
        />
        <Route
          path="/products/pvc-membranes/accessories/dectec-r12000-pvc-boot-1-6-opening-conical"
          element={<RoofingSeriesPipeboots />}
        />
        <Route
          path="/products/pvc-membranes/accessories/termination-bar"
          element={<TerminationBar />}
        />
        <Route
          path="/products/pvc-membranes/accessories/descupper"
          element={<DecScupper />}
        />
        <Route
          path="/products/pvc-membranes/accessories/deccorner-outside"
          element={<DeccornerOutside />}
        />
        <Route
          path="/products/pvc-membranes/accessories/deccorner-inside"
          element={<DeccornerInside />}
        />
        <Route
          path="/products/pvc-membranes/accessories/heat-welder"
          element={<HeatWelder />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
