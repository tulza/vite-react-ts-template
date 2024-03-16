import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "@pages/PageNotFound";
import WebsiteTransitionAnimation from "./TransitionAnim/WebsiteTransitionAnimation";
import { AnimatePresence } from "framer-motion";
import Home from "@components/pages/Home";
import CursorContext from "@cursor/CursorContext";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <WebsiteTransitionAnimation key={location.pathname}>
          <CursorContext>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </CursorContext>
        </WebsiteTransitionAnimation>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoute;
