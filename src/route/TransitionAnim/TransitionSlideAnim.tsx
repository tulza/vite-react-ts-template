import { motion } from "framer-motion";
const TransitionSlideAnim = () => {
  return (
    <>
      <motion.div
        style={{ transformOrigin: "bottom" }}
        className="fixed z-[99] h-[100vh] w-[100vw] bg-black"
        transition={{ ease: "easeInOut", duration: 0.5 }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
      />
      {/* EXIT */}
      <motion.div
        style={{ transformOrigin: "top" }}
        className="fixed z-[99] h-[100vh] w-[100vw] bg-black"
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
        initial={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
      />
      <motion.div
        style={{ transformOrigin: "top" }}
        className="fixed z-[98] h-[100vh] w-[100vw] bg-[#aaa]"
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
        initial={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
      />
      <motion.div
        style={{ transformOrigin: "top" }}
        className="fixed z-[97] h-[100vh] w-[100vw] bg-[#666]"
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0 }}
        initial={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
      />
    </>
  );
};

export default TransitionSlideAnim;
