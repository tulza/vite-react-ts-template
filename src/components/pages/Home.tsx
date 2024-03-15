import { useContext, useRef } from "react";
import Navigation from "@components/Navigation";
import Cursor from "@cursor/Cursor";
import { CursorContexts } from "@cursor/CursorContext";
import {
  readMoreEnter,
  readMoreLeave,
  pageEnter,
  pageLeave,
} from "@cursor/cursorHandle";

const Home = () => {
  const ref = useRef(null);
  const { setCursor } = useContext(CursorContexts);
  return (
    <Cursor containerRef={ref}>
      <div
        ref={ref}
        onMouseEnter={() => setCursor(...pageEnter())}
        onMouseLeave={() => setCursor(...pageLeave())}
      >
        <Navigation />
        <div className="flex h-[1080px] w-full items-center justify-center">
          <div
            className="h-[500px] w-[500px] outline"
            onMouseEnter={() => setCursor(...readMoreEnter())}
            onMouseLeave={() => setCursor(...readMoreLeave())}
          >
            read
          </div>
        </div>
      </div>
    </Cursor>
  );
};
export default Home;
