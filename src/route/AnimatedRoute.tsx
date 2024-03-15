import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "@pages/PageNotFound";
import WebsiteTransitionAnimation from "./TransitionAnim/WebsiteTransitionAnimation";
import { AnimatePresence } from "framer-motion";
import Home from "@components/pages/Home";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <WebsiteTransitionAnimation key={location.pathname}>
          <Routes location={location}>
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </WebsiteTransitionAnimation>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoute;
