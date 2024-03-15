import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CursorContexts } from "@cursor/CursorContext";
import { useContext } from "react";
import { navigationEnter, navigationExit } from "@cursor/cursorHandle";

const Navigation = () => {
  return (
    <>
      <div className="absolute flex w-full justify-center gap-8 p-8">
        <NavButton name="/" />
        <NavButton name="home" />
      </div>
    </>
  );
};

const NavButton = ({ name }: { name: string }) => {
  const { setCursor } = useContext(CursorContexts);
  return (
    <Link to={`${name}`}>
      <motion.div
        whileHover="hover"
        onMouseEnter={() => setCursor(...navigationEnter())}
        onMouseLeave={() => setCursor(...navigationExit())}
      >
        <motion.div
          className="outline-6 border-background bg-element shadow-background outline-element rounded-full border-4 p-4 px-8 font-bold shadow-lg outline"
          variants={{ hover: { y: 10, borderColor: "#fff" } }}
        >
          <code>{name}</code>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Navigation;
