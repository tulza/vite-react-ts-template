import Navigation from "@components/Navigation";
import { useContext, useRef } from "react";
import Cursor from "@cursor/Cursor";
import { CursorContexts } from "@cursor/CursorContext";

const Home = () => {
  const ref = useRef(null);
  const { setCursor } = useContext(CursorContexts);
  return (
    <Cursor containerRef={ref}>
      <div
        ref={ref}
        onMouseEnter={() => setCursor("text", "Default")}
        onMouseLeave={() => setCursor("", "None")}
      >
        <Navigation />
        <div className="flex h-[1080px] w-full items-center justify-center">
          <div
            className="h-[500px] w-[500px] outline"
            onMouseEnter={() => setCursor("Read More", "ReadMore")}
            onMouseLeave={() => setCursor("", "Default")}
          >
            {" "}
            read
          </div>
        </div>
      </div>
    </Cursor>
  );
};
export default Home;
