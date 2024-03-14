import Template from "@components/pages/Template";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "@pages/PageNotFound";
import WebsiteTransitionAnimation from "./TransitionAnim/WebsiteTransitionAnimation";
import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <WebsiteTransitionAnimation key={location.pathname}>
          <Routes location={location}>
            <Route path="/home" element={<Template />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </WebsiteTransitionAnimation>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoute;
