import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="bg-stone-850 flex h-full w-full items-center justify-center bg-white">
      <motion.div
        className="flex flex-col rounded-xl bg-white p-6 text-black outline outline-1 outline-black"
        initial={{ boxShadow: "#000 5px 5px" }}
        whileHover={{ boxShadow: "#000 20px 20px" }}
      >
        <div className="text-xl font-bold">404</div>
        <div className="text-3xl font-bold">Page Not Found</div>
        <hr className="my-4 w-[400px] rounded-lg bg-white" />
        <div className="w-full">
          <div className="w-min whitespace-nowrap rounded-xl p-2 px-8 outline outline-1">
            <Link to="/">Go to Home</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
