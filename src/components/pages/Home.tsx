import { useContext, useRef } from "react";
import Navigation from "@components/Navigation";
import Cursor from "@cursor/Cursor";
import { CursorContexts } from "@cursor/CursorContext";
import {
  readMoreEnter,
  readMoreLeave,
  pageEnter,
  pageLeave,
  DisableCursorLeave,
  DisableCursorEnter,
  Square,
  Red,
} from "@cursor/cursorHandle";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const ref = useRef(null);
  const { setCursor, setEnableCursor, enableCursor } =
    useContext(CursorContexts);
  return (
    <Cursor containerRef={ref}>
      <div
        ref={ref}
        onMouseEnter={() => setCursor(...pageEnter())}
        onMouseLeave={() => setCursor(...pageLeave())}
      >
        <Navigation />
        <div className="flex h-[1080px] w-full flex-col items-center justify-center gap-20">
          <motion.div
            className="flex h-[100px] w-[100px] cursor-pointer select-none items-center justify-center rounded-full text-center outline"
            onMouseEnter={() => setCursor(...DisableCursorEnter())}
            onMouseLeave={() => setCursor(...DisableCursorLeave())}
            onClick={() => setEnableCursor(!enableCursor)}
          >
            <AnimatePresence mode="wait">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={enableCursor}
                className="flex flex-col"
                layout
              >
                {enableCursor ? (
                  <div>Disable Cursor</div>
                ) : (
                  <div>Enable Cursor</div>
                )}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          <div className="flex gap-20">
            <div
              className="h-[300px] w-[300px] outline"
              onMouseEnter={() => setCursor(...Red())}
              onMouseLeave={() => setCursor(...readMoreLeave())}
            >
              Red
            </div>
            <div
              className="h-[300px] w-[300px] outline"
              onMouseEnter={() => setCursor(...readMoreEnter())}
              onMouseLeave={() => setCursor(...readMoreLeave())}
            >
              read
            </div>
            <div
              className="h-[300px] w-[300px] outline"
              onMouseEnter={() => setCursor(...Square())}
              onMouseLeave={() => setCursor(...readMoreLeave())}
            >
              black
            </div>
          </div>
          <div
            className="h-[300px] w-[300px] outline"
            onMouseEnter={() => setCursor(...Square())}
            onMouseLeave={() => setCursor(...readMoreLeave())}
          >
            Mask
            <div></div>
          </div>
        </div>
      </div>
    </Cursor>
  );
};
export default Home;
