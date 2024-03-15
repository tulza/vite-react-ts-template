import { motion } from "framer-motion";
import useMouse from "@react-hook/mouse-position";

const Cursor = ({
  containerRef,
}: {
  containerRef: React.MutableRefObject<null>;
}) => {
  let mouseXPosition = 0;
  let mouseYPosition = 0;
  const mouse = useMouse(containerRef, {
    enterDelay: 100,
    leaveDelay: 500,
    fps: 15,
  });
  if (mouse.x != null) {
    console.log(mouse.x);
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
  const mouseVariant = {
    mouse: {
      opacity: 1,
      height: 30,
      width: 30,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };

  console.log(mouse.x);

  return (
    <motion.div
      className="pointer-events-none absolute select-none rounded-full"
      animate="mouse"
      variants={mouseVariant}
      transition={spring}
    />
  );
};

export default Cursor;
