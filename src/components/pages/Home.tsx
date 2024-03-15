import Navigation from "@components/Navigation";
import { useRef } from "react";
import Cursor from "./Cursor";

const Home = () => {
  const ref = useRef(null);
  return (
    <>
      <Cursor containerRef={ref} />
      <div ref={ref}>
        <Navigation />
      </div>
    </>
  );
};

export default Home;
