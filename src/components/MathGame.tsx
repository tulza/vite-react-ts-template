import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MathGame = () => {
  const duration = 5;
  const [time, settime] = useState<string>(String(duration));
  useEffect(() => {
    if (parseInt(time) > 0) {
      setTimeout(() => {
        settime(String(parseInt(time) - 1));
      }, 1000);
    } else {
      setTimeout(() => {
        settime("time out ;w;");
      }, 1000);
    }
  }, [time]);

  const url =
    "https://math.vercel.app/?color=white&from=\\text{solve for }x,\\ 6x^2-20=-16";
  //
  return (
    <div className="grid place-items-center gap-20">
      <div className="flex w-full flex-col place-items-center gap-40">
        <img src={url} className="h-[100px]" />
        <div className="flex h-max gap-10">
          <SelButton />
          <SelButton />
          <SelButton />
          <SelButton />
        </div>
      </div>
      <div className="flex w-full flex-col items-center">
        <motion.div
          className="h-2 w-full bg-white"
          initial={{ scaleX: "100%" }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration }}
        />
        <motion.div className=" scale-100">
          <code>{time}</code>
        </motion.div>
      </div>
    </div>
  );
};

const SelButton = () => {
  return (
    <div className="outline-element bg-element shadow-background border-background outline-6 rounded-full border-4 p-4 px-8 font-bold shadow-lg outline">
      <code>wa</code>
    </div>
  );
};

export default MathGame;
