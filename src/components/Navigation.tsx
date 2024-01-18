import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <>
      <div className="text-center">router</div>
      <div className="mb-32 flex justify-center gap-8 p-8">
        <NavButton name="/" />
        <NavButton name="home" />
        <NavButton name="mathgame" />
      </div>
    </>
  );
};

const NavButton = ({ name }: { name: string }) => {
  return (
    <Link to={`${name}`}>
      <motion.div whileHover="hover">
        <motion.div
          className="outline-element bg-element shadow-background border-background outline-6 rounded-full border-4 p-4 px-8 font-bold shadow-lg outline"
          variants={{ hover: { y: 10, borderColor: "var(--white)" } }}
        >
          <code>{name}</code>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Navigation;
