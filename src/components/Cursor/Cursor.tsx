import { AnimatePresence, motion } from "framer-motion";
import useMouse from "@react-hook/mouse-position";
import { useContext } from "react";
import { CursorContexts } from "./CursorContext";
import { mouseVariant } from "./cursorVariants";

/**
 * HOW TO USE: place element as a child of Cursor!
 *
 * @param {React.MutableRefObject<null>} containerRef - Reference to the container element
 * @param {React.ReactNode} children - Child elements to render
 */
const Cursor = ({
  containerRef,
  children,
}: {
  containerRef: React.MutableRefObject<null>;
  children: React.ReactNode;
}) => {
  // Value
  const { Text, cursorVariant, enableCursor } = useContext(CursorContexts);
  // Logic
  let mouseXPosition = 0;
  let mouseYPosition = 0;
  const mouse = useMouse(containerRef, {
    enterDelay: 100,
    leaveDelay: 500,
    fps: 30,
  });
  if (mouse.x != null) {
    mouseXPosition = mouse.x;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.y;
  }

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return (
    <>
      <motion.div
        className="pointer-events-none absolute z-[99] grid select-none place-content-center whitespace-nowrap rounded-full"
        animate={enableCursor ? cursorVariant : "None"}
        variants={mouseVariant(mouseXPosition, mouseYPosition)}
        transition={spring}
      >
        <AnimatePresence>
          <motion.span exit={{ fontSize: 0 }} key={Text}>
            {Text}
          </motion.span>
        </AnimatePresence>
      </motion.div>
      {children}
    </>
  );
};

export default Cursor;
